import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
@NgModule({
  declarations: [AppComponent, RegistrationFormComponent, SuccessMessageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
