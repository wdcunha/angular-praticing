import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {HomelazyComponent} from '../../shared/components/homelazy/homelazy.component';


const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children: [
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      }
    ]
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }

/**
 * Curso Angular 8: Lazy Loading e Modules - #06
 * https://www.youtube.com/watch?v=8JxN-gYdZgk&list=PL4iwH9RF8xHnMnKewOLjDvTHzTmyxJNHF&index=6
 */
