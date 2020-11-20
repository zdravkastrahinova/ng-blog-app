import { NgModule } from '@angular/core';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [FieldErrorMessageComponent],
  exports: [FieldErrorMessageComponent]
})
export class CoreModule {
}
