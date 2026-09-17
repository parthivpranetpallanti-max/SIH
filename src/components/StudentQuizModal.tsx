import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, X, ArrowRight, Sparkles } from 'lucide-react';
import { HERITAGE_QUIZ_QUESTIONS } from '../data/quizData';

interface StudentQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateScore: (score: number) => void;
}

export const StudentQuizModal: React.FC<StudentQuizModalProps> = ({
  isOpen,
  onClose,
  onUpdateScore,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = HERITAGE_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      const newScore = score + 10;
      setScore(newScore);
      onUpdateScore(newScore);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < HERITAGE_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div
      id="student-heritage-quiz-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#171A20] to-[#0F1115] border-2 border-[#D4A017]/40 rounded-2xl shadow-2xl p-6 text-[#D8D4CC] animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#20242B] hover:bg-[#F28C28] text-[#9B9A96] hover:text-[#0F1115] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!quizFinished ? (
          <div>
            {/* Quiz Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#D4A017]/20 border border-[#D4A017]/50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#F4D06F]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                    Bharat Heritage Scholar Quiz
                  </h3>
                  <span className="text-xs text-[#9B9A96]">
                    Question {currentQuestionIndex + 1} of {HERITAGE_QUIZ_QUESTIONS.length}
                  </span>
                </div>
              </div>

              <div className="px-3.5 py-1 rounded-full bg-[#171A20] border border-[#D4A017]/50 text-[#F4D06F] font-mono text-xs font-bold shadow-sm">
                {score} Points
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <div className="inline-block px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#F28C28]/20 border border-[#F28C28]/40 text-[#F28C28] mb-2">
                {currentQ.category.replace('_', ' ')} • {currentQ.state}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#FFF3D6] leading-snug font-display">
                {currentQ.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                let optClass = 'bg-[#20242B]/80 border-white/10 hover:border-[#F28C28] text-[#D8D4CC]';

                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctIndex) {
                    optClass = 'bg-[#123E3D] border-[#16745B] text-[#FFF3D6] font-bold shadow-sm';
                  } else if (isSelected) {
                    optClass = 'bg-[#4A1D24] border-rose-500 text-rose-200';
                  } else {
                    optClass = 'bg-[#171A20]/40 border-white/5 text-[#9B9A96]';
                  }
                } else if (isSelected) {
                  optClass = 'bg-[#F28C28]/20 border-[#F28C28] text-[#FFF3D6] font-bold shadow-sm';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optClass}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-[#52B79C] shrink-0 ml-2" />
                    )}
                    {isAnswerSubmitted && isSelected && idx !== currentQ.correctIndex && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-xl bg-[#0F1115] border border-[#D4A017]/40 mb-6 text-xs text-[#D8D4CC] animate-in fade-in">
                <span className="font-bold text-[#F4D06F] block mb-1">
                  Curator’s Explanation:
                </span>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-5 py-2.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] disabled:opacity-30 disabled:cursor-not-allowed text-[#0F1115] font-extrabold text-xs shadow-md transition-all cursor-pointer"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D4A017] hover:brightness-110 text-[#0F1115] font-extrabold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <span>
                    {currentQuestionIndex < HERITAGE_QUIZ_QUESTIONS.length - 1
                      ? 'Next Question'
                      : 'View My Heritage Badge'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Results & Student Heritage Badge */
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#F28C28] via-[#D4A017] to-[#176B87] flex items-center justify-center shadow-xl shadow-black/50 ring-4 ring-[#D4A017]/30 mb-4 animate-bounce">
              <Award className="w-10 h-10 text-[#0F1115]" />
            </div>

            <span className="px-3 py-1 rounded-full bg-[#D4A017]/20 text-[#F4D06F] text-xs font-bold uppercase tracking-wider border border-[#D4A017]/40">
              Official Museum Recognition
            </span>

            <h3 className="text-2xl font-display font-extrabold text-[#FFF3D6] mt-2">
              Bharat Heritage Scholar
            </h3>
            <p className="text-sm text-[#D8D4CC] mt-1">
              You scored <strong className="text-[#F4D06F] font-bold">{score} / {HERITAGE_QUIZ_QUESTIONS.length * 10}</strong> points!
            </p>

            <div className="p-4 rounded-xl bg-[#0F1115] border border-white/10 my-6 text-xs text-[#D8D4CC] max-w-md mx-auto leading-relaxed">
              Congratulations! You have demonstrated exceptional knowledge of Indian architecture, traditional craftsmanship, classical arts, and culinary heritage.
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2.5 rounded-xl bg-[#20242B] hover:bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] text-xs font-extrabold shadow-md transition-colors cursor-pointer"
              >
                Return to Museum
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
