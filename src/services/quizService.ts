import { apiFetch } from './apiClient';
import { QuizQuestion } from '../types';
import { HERITAGE_QUIZ_QUESTIONS } from '../data/quizData';

export interface QuizVerifyResponse {
  questionId: string;
  isCorrect: boolean;
  correctIndex: number;
  explanation: string;
}

export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  return apiFetch<QuizQuestion[]>(
    '/quiz/questions',
    { method: 'GET' },
    HERITAGE_QUIZ_QUESTIONS
  );
}

export async function verifyQuizAnswer(
  questionId: string,
  selectedIndex: number
): Promise<QuizVerifyResponse> {
  const localQ = HERITAGE_QUIZ_QUESTIONS.find((q) => q.id === questionId);
  const fallback: QuizVerifyResponse = {
    questionId,
    isCorrect: localQ ? localQ.correctIndex === selectedIndex : false,
    correctIndex: localQ ? localQ.correctIndex : 0,
    explanation: localQ ? localQ.explanation : '',
  };

  return apiFetch<QuizVerifyResponse>(
    '/quiz/verify',
    {
      method: 'POST',
      body: JSON.stringify({ questionId, selectedIndex }),
    },
    fallback
  );
}
