import { Router } from 'express';
import { heritageRouter } from './heritageRoutes';
import { curatorRouter } from './curatorRoutes';
import { visitorDeskRouter } from './visitorDeskRoutes';
import { quizRouter } from './quizRoutes';

export const apiRouter = Router();

// Health check endpoint
apiRouter.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'Virtual Bharat Museum API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Architecture information endpoint for user inspection
apiRouter.get('/architecture', (_req, res) => {
  res.json({
    application: 'Virtual Bharat Museum',
    architecture: {
      frontendLayer: {
        title: 'Presentation & UI Layer',
        description: 'Interactive React 19 UI with Tailwind CSS, Lucide Icons, and Motion animations.',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Lucide React', 'Motion', 'Web Speech API'],
        modules: ['Components (Plaques, Modals, Drawers)', 'Interactive India Map', 'Audio Guide Engine'],
      },
      middleLayer: {
        title: 'API Client, Middleware & Service Layer',
        description: 'Bridges frontend presentation with backend endpoints, handling validation, serialization, offline fallback, and client caching.',
        technologies: ['Fetch API abstraction', 'Express Middlewares', 'LocalStorage Persistence Sync', 'Error & Rate Handlers'],
        modules: ['heritageService', 'curatorService', 'visitorDeskService', 'quizService', 'notebookStorageService'],
      },
      backendLayer: {
        title: 'Server Runtime & Domain Services Layer',
        description: 'Node.js Express runtime exposing REST endpoints, curatorial reasoning engine, and ASI visitor regulation data.',
        technologies: ['Node.js', 'Express 4', 'Vite Dev Middleware', 'TypeScript (tsx / esbuild)'],
        modules: ['Curator Engine', 'Visitor Desk Engine', 'Heritage Catalog Router', 'Quiz Engine'],
      },
    },
  });
});

// Register sub-routers
apiRouter.use('/heritage', heritageRouter);
apiRouter.use('/curator', curatorRouter);
apiRouter.use('/visitor-desk', visitorDeskRouter);
apiRouter.use('/quiz', quizRouter);
