import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Transactions } from './transactions';

const routes: Routes = [{ path: '', component: Transactions }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
