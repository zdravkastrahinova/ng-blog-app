import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {TableViewComponent} from './table-view/table-view.component';
import {CardListViewComponent} from './card-list-view/card-list-view.component';
import {CardItemComponent} from './card-item/card-item.component';
import { PostTdFormComponent } from './post-forms/post-td-form/post-td-form.component';
import { TableListComponent } from './table-list/table-list.component';
import { PostReactiveFormComponent } from './post-forms/post-reactive-form/post-reactive-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { FieldErrorMessageComponent } from './field-error-message/field-error-message.component';
import {HttpClientModule} from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'ancient-wonders',
    component: TableListComponent
  },
  {
    path: 'ancient-wonders/create',
    component: PostTdFormComponent
  },
  {
    path: 'ancient-wonders/edit/:id',
    component: PostTdFormComponent
  },
  {
    path: 'new-wonders',
    component: CardListComponent
  },
  {
    path: 'new-wonders/create',
    component: PostReactiveFormComponent
  },
  {
    path: 'new-wonders/edit/:id',
    component: PostReactiveFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TableViewComponent,
    CardListViewComponent,
    CardItemComponent,
    PostTdFormComponent,
    TableListComponent,
    PostReactiveFormComponent,
    CardListComponent,
    FieldErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
