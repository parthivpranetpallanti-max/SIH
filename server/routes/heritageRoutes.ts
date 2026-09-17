import { Router, Request, Response } from 'express';
import { HERITAGE_ITEMS } from '../../src/data/heritageItemsData';
import { STATES_DATA } from '../../src/data/statesData';
import { CULTURAL_CATEGORIES } from '../../src/data/categoriesData';
import { MONUMENT_MATERIALS_DATA } from '../../src/data/monumentMaterialsData';

export const heritageRouter = Router();

// GET /api/heritage/items - retrieve items with optional filters
heritageRouter.get('/items', (req: Request, res: Response) => {
  const { stateId, districtId, category, search } = req.query;

  let items = [...HERITAGE_ITEMS];

  if (stateId && typeof stateId === 'string') {
    items = items.filter((item) => item.stateId === stateId);
  }

  if (districtId && typeof districtId === 'string') {
    items = items.filter((item) => item.districtId === districtId);
  }

  if (category && typeof category === 'string' && category !== 'all') {
    items = items.filter((item) => item.category === category);
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.hindiTitle.toLowerCase().includes(q) ||
        item.stateName.toLowerCase().includes(q) ||
        item.districtName.toLowerCase().includes(q) ||
        item.curatorSummary.toLowerCase().includes(q) ||
        item.architecturalStyleOrMedium?.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: items.length,
    data: items,
  });
});

// GET /api/heritage/items/:id - single exhibit details
heritageRouter.get('/items/:id', (req: Request, res: Response) => {
  const item = HERITAGE_ITEMS.find((h) => h.id === req.params.id);
  if (!item) {
    return res.status(404).json({
      success: false,
      error: { message: `Heritage item '${req.params.id}' not found.` },
    });
  }
  res.json({ success: true, data: item });
});

// GET /api/heritage/states - all state data with districts
heritageRouter.get('/states', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: STATES_DATA.length,
    data: STATES_DATA,
  });
});

// GET /api/heritage/categories - all 7 cultural categories
heritageRouter.get('/categories', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: CULTURAL_CATEGORIES.length,
    data: CULTURAL_CATEGORIES,
  });
});

// GET /api/heritage/materials - architectural materials data
heritageRouter.get('/materials', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: MONUMENT_MATERIALS_DATA.length,
    data: MONUMENT_MATERIALS_DATA,
  });
});
