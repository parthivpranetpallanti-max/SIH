import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { apiRouter } from './server/routes/apiRouter';
import { requestLogger } from './server/middleware/logger';
import { errorHandler } from './server/middleware/errorHandler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares: Body parser & Request Logger
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  // Backend API Router (Middle & Backend Layer)
  app.use('/api', apiRouter);

  // Centralized Error Handling for API routes
  app.use('/api', errorHandler);

  // Development: Vite middleware for HMR / SPA serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static assets from dist/
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Virtual Bharat Museum Server] Running at http://0.0.0.0:${PORT}`);
    console.log(`[Architecture] Frontend (React+Vite) | Middle Layer (API Client & Middlewares) | Backend (Express API)`);
  });
}

startServer().catch((err) => {
  console.error('[Virtual Bharat Museum Server Startup Error]', err);
  process.exit(1);
});
