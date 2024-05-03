import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputFieldComponent } from './components/atoms/input-field/input-field.component';
import { FormFieldComponent } from './components/molecules/form-field/form-field.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { GetSpecificTechnologyFormComponent } from './components/organisms/get-specific-technology-form/get-specific-technology-form.component';
import { PageSelectorComponent } from './components/organisms/page-selector/page-selector.component';
import { InputRadioComponent } from './components/atoms/input-radio/input-radio.component';
import { SmallNumberComponent } from './components/atoms/small-number/small-number.component';
import { LabelNumberPairComponent } from './components/molecules/label-number-pair/label-number-pair.component';
import { ResultCardComponent } from './components/molecules/result-card/result-card.component';
import { ResultsHolderComponent } from './components/organisms/results-holder/results-holder.component';
import { SearchListComponent } from './components/templates/search-list/search-list.component';
import { LogOutComponent } from './components/molecules/log-out/log-out.component';
import { LogInComponent } from './components/organisms/log-in/log-in.component';
import { LibraryComponent } from './components/templates/library/library.component';
import { HomeComponent } from './components/templates/home/home.component';
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { BootcampComponent } from './components/pages/bootcamp/bootcamp.component';
import { CapabilitiesComponent } from './components/pages/capabilities/capabilities.component';
import { TemplatePickerComponent } from './templates/picker/template-picker/template-picker.component';
import { DropdownComponent } from './components/atoms/dropdown/dropdown.component';
import { ModalComponent } from './components/molecules/modal/modal.component';
import { AddTechnologyFormComponent } from './components/molecules/add-technology-form/add-technology-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent,
    FormFieldComponent,
    LabelComponent,
    GetSpecificTechnologyFormComponent,
    PageSelectorComponent,
    InputRadioComponent,
    SmallNumberComponent,
    LabelNumberPairComponent,
    ResultCardComponent,
    ResultsHolderComponent,
    SearchListComponent,
    LogOutComponent,
    LogInComponent,
    LibraryComponent,
    HomeComponent,
    TechnologiesComponent,
    BootcampComponent,
    CapabilitiesComponent,
    TemplatePickerComponent,
    DropdownComponent,
    ModalComponent,
    AddTechnologyFormComponent,
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
