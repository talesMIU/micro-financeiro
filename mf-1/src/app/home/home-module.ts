import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild([{ path: '', component: Home}])
  ],
  exports: [RouterModule]
})
export class HomeModule { }
