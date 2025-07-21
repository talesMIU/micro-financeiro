import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'mf-1',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'mf-2',
    renderMode: RenderMode.Prerender
  }
];
