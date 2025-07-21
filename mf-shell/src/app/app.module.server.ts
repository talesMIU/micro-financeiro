import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    AppModule,
    RouterModule.forRoot(serverRoutes)
  ],
  providers: [provideServerRendering()],
  bootstrap: [App],
})
export class AppServerModule {}
