import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {HomelazyComponent} from '../../shared/components/homelazy/homelazy.component';


const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
