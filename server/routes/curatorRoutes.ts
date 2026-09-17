import { Router, Request, Response } from 'express';
import { getCuratorResponse, PRESET_QUESTIONS } from '../services/curatorEngine';

export const curatorRouter = Router();

// GET /api/curator/presets - suggested curatorial inquiries
curatorRouter.get('/presets', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: PRESET_QUESTIONS,
  });
});

// POST /api/curator/ask - query the senior museum curator
curatorRouter.post('/ask', (req: Request, res: Response) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({
      success: false,
      error: { message: 'A valid question string is required.' },
    });
  }

  const answer = getCuratorResponse(question);

  res.json({
    success: true,
    data: {
      question,
      ...answer,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  });
});
