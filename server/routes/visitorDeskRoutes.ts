import { Router, Request, Response } from 'express';
import { MONUMENTS_VISITOR_DATA, GENERAL_VISITOR_RULES } from '../../src/data/visitorDeskData';
import { processVisitorInquiry } from '../services/visitorDeskEngine';

export const visitorDeskRouter = Router();

// GET /api/visitor-desk/monuments - all monuments with entry fees and timings
visitorDeskRouter.get('/monuments', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: MONUMENTS_VISITOR_DATA.length,
    data: MONUMENTS_VISITOR_DATA,
  });
});

// GET /api/visitor-desk/rules - general national ASI regulations
visitorDeskRouter.get('/rules', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: GENERAL_VISITOR_RULES,
  });
});

// POST /api/visitor-desk/inquire - AI / Rules engine inquiry
visitorDeskRouter.post('/inquire', (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({
      success: false,
      error: { message: 'A query string is required.' },
    });
  }

  const result = processVisitorInquiry(query);

  res.json({
    success: true,
    data: result,
  });
});
