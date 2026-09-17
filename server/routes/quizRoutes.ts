import { Router, Request, Response } from 'express';
import { HERITAGE_QUIZ_QUESTIONS } from '../../src/data/quizData';

export const quizRouter = Router();

// GET /api/quiz/questions - retrieve all quiz questions
quizRouter.get('/questions', (_req: Request, res: Response) => {
  // Return questions without revealing correct answer index if desired, or full for scholar mode
  res.json({
    success: true,
    count: HERITAGE_QUIZ_QUESTIONS.length,
    data: HERITAGE_QUIZ_QUESTIONS,
  });
});

// POST /api/quiz/verify - verify an individual answer
quizRouter.post('/verify', (req: Request, res: Response) => {
  const { questionId, selectedIndex } = req.body;

  const question = HERITAGE_QUIZ_QUESTIONS.find((q) => q.id === questionId);
  if (!question) {
    return res.status(404).json({
      success: false,
      error: { message: `Question '${questionId}' not found.` },
    });
  }

  const isCorrect = question.correctIndex === selectedIndex;

  res.json({
    success: true,
    data: {
      questionId,
      isCorrect,
      correctIndex: question.correctIndex,
      explanation: question.explanation,
    },
  });
});
