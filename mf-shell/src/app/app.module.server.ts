import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';
import { RouterModule, Routes } from '@angular/router';
import { ServerModule } from '@angular/platform-server';
import { Server } from 'http';
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(serverRoutes)
  ],
  providers: [provideServerRendering()],
  bootstrap: [App],
})
export class AppServerModule {}
