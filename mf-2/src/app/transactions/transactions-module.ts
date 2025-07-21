import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing-module';
import { Transactions } from './transactions';
import { RouterEvent, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Transactions
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    RouterModule.forChild([{ path: '', component: Transactions}])
  ],
  exports: [RouterModule]
})
export class TransactionsModule { }
