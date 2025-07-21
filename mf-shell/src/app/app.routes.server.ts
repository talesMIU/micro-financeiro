import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { App } from './app';
export const serverRoutes: Routes = [
  {
    path: '', // Rota padrão do shell
    component: App // Seu componente principal do shell
  },
  {
    path: 'mf-1',
    loadChildren:()=>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mf-1',
        exposedModule: './HomeModule'
      }).then(m => m.HomeModule)
  },
   {
    path: 'mf-2',
    loadChildren:()=>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mf-2',
        exposedModule: './TransactionsModule'
      }).then(m => m.TransactionsModule)
  },
];
