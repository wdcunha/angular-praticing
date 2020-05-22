import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';


@NgModule({
  declarations: [], // as declarations podem ser feitas aqui ao invés de fazer no LazyloadingRoutingModule
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
