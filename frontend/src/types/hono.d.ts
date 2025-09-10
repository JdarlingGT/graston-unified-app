declare module 'hono' {
  export class Hono {
    use(path: string, handler: any): void;
    route(path: string, handler: any): void;
  }
}

declare module 'hono/cloudflare-workers' {
  export function serveStatic(options: { root: string }): any;
}
