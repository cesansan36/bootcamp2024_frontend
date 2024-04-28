import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputFieldComponent } from './atoms/input-field/input-field.component';
import { FormFieldComponent } from './molecules/form-field/form-field.component';
import { LabelComponent } from './atoms/label/label.component';
import { AddTechnologyFormComponent } from './organisms/add-technology-form/add-technology-form.component';
import { GetSpecificTechnologyFormComponent } from './organisms/get-specific-technology-form/get-specific-technology-form.component';
import { PageSelectorComponent } from './organisms/page-selector/page-selector.component';
import { InputRadioComponent } from './atoms/input-radio/input-radio.component';
import { SmallNumberComponent } from './atoms/small-number/small-number.component';
import { LabelNumberPairComponent } from './molecules/label-number-pair/label-number-pair.component';
import { ResultCardComponent } from './molecules/result-card/result-card.component';
import { ResultsHolderComponent } from './organisms/results-holder/results-holder.component';
import { SearchListComponent } from './templates/search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent,
    FormFieldComponent,
    LabelComponent,
    AddTechnologyFormComponent,
    GetSpecificTechnologyFormComponent,
    PageSelectorComponent,
    InputRadioComponent,
    SmallNumberComponent,
    LabelNumberPairComponent,
    ResultCardComponent,
    ResultsHolderComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
