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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
