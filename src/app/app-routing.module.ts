import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCardComponent} from './shared/components/post-card/post-card.component';
import {SegundoCpComponent} from './shared/components/segundo-cp/segundo-cp.component';
import {ShowPageComponent} from './shared/components/show-page/show-page.component';
import {NgIfNgForComponent} from './shared/components/ng-if-ng-for/ng-if-ng-for.component';
import {CrudComponent} from './shared/components/crud/crud.component';
import {OutputInputComponent} from './shared/components/output-input/output-input.component';

const routes: Routes = [
  { path: '', component: OutputInputComponent},
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazyloading/lazyloading.module')
        .then(module => module.LazyloadingModule)},
  {path: 'cp-post-card', component: PostCardComponent},
  {path: 'app-segundo-cp', component: SegundoCpComponent},
  {path: 'app-show-page', component: ShowPageComponent},
  {path: 'ngif-ngfor', component: NgIfNgForComponent},
  {path: 'crud', component: CrudComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
