import { Hono, type Context } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// Serve static assets from the /frontend/dist directory
app.use('*', serveStatic({ root: './frontend/dist' }));

// API routes - handle all methods under /api/*
app.all('/api/*', async (c: Context) => {
  const path = c.req.param('*');
  // Dynamically import the function module and invoke its default export
  const mod = await import(`../functions/${path}`);
  const handler = (mod as { default: (ctx: Context) => Response | Promise<Response> }).default;
  return handler(c);
});

export default app;
