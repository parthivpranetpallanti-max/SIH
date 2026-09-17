// Web Speech API text-to-speech audio guide and Web Audio API Tanpura drone

class MuseumAudioEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private audioCtx: AudioContext | null = null;
  private droneGain: GainNode | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private isAmbiencePlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  // Audio Guide Speech Narration
  public speakGuide(
    text: string,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void
  ) {
    if (!this.synth) return;
    this.stopGuide();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Pick English (India) or pleasant default English voice
    const voices = this.synth.getVoices();
    const preferredVoice =
      voices.find((v) => v.lang.includes('en-IN') || v.name.includes('India')) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (onError) onError();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pauseGuide() {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  public resumeGuide() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  public stopGuide() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }

  // Indian Classical Tanpura Ambient Drone (Sa-Pa harmonic chord)
  public toggleAmbience(): boolean {
    if (this.isAmbiencePlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience();
      return true;
    }
  }

  public getAmbienceState(): boolean {
    return this.isAmbiencePlaying;
  }

  public startAmbience() {
    try {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.stopAmbience();

      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, this.audioCtx.currentTime + 3);
      masterGain.connect(this.audioCtx.destination);
      this.droneGain = masterGain;

      // Indian classical key of C# (approx 138.59 Hz) with Sa-Pa-Sa fifths
      const freqs = [138.59, 207.65, 277.18, 415.3];

      freqs.forEach((freq, idx) => {
        if (!this.audioCtx || !this.droneGain) return;
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        // Gentle harmonic modulation
        oscGain.gain.setValueAtTime(0.25 / (idx + 1), this.audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.droneGain);
        osc.start();
        this.droneOscillators.push(osc);
      });

      this.isAmbiencePlaying = true;
    } catch {
      this.isAmbiencePlaying = false;
    }
  }

  public stopAmbience() {
    if (this.droneGain && this.audioCtx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(
          0.0001,
          this.audioCtx.currentTime + 1
        );
        setTimeout(() => {
          this.droneOscillators.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // ignore
            }
          });
          this.droneOscillators = [];
        }, 1000);
      } catch {
        this.droneOscillators = [];
      }
    }
    this.isAmbiencePlaying = false;
  }
}

export const museumAudio = new MuseumAudioEngine();
