import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { App } from './app'; // Componente raiz do shell

const routes: Routes = [
  {
    path: 'mf-1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mf-1',
        exposedModule: './Module'
      }).then(m => m.AppModule)
  },
  {
    path: 'mf-2',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mf-2',
        exposedModule: './Module'
      }).then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
