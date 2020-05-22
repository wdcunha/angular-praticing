import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {PostCardComponent} from './shared/components/post-card/post-card.component';
import {RouterModule} from '@angular/router';
import {ShowPageComponent} from './shared/components/show-page/show-page.component';
import {SegundoCpComponent} from './shared/components/segundo-cp/segundo-cp.component';
import {NgIfNgForComponent} from './shared/components/ng-if-ng-for/ng-if-ng-for.component';
import {CrudComponent} from './shared/components/crud/crud.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LazyloadingModule} from './modules/lazyloading/lazyloading.module';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    ShowPageComponent,
    SegundoCpComponent,
    NgIfNgForComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    LazyloadingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
