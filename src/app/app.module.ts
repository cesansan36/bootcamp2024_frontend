import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputFieldComponent } from './atoms/input-field/input-field.component';
import { FormFieldComponent } from './molecules/form-field/form-field.component';
import { LabelComponent } from './atoms/label/label.component';
import { AddTechnologyFormComponent } from './organisms/add-technology-form/add-technology-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent,
    FormFieldComponent,
    LabelComponent,
    AddTechnologyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
