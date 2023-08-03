import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { IRegistrationData } from '../../interfaces/registration.interface';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  isLinear = false;
  registrationForm : FormGroup;
  constructor(private readonly fb: FormBuilder, private readonly registrationService: RegistrationService) { 
    this.registrationForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required)
      }),
      addressInfo: this.fb.group({
        street: this.fb.control('', Validators.required),
        houseNumber: this.fb.control('', Validators.required),
        zipCode: this.fb.control('', Validators.required),
        city: this.fb.control('', Validators.required)
      }),
      paymentInfo: this.fb.group({
        accountOwner: this.fb.control('', Validators.required),
        IBAN: this.fb.control('', Validators.required)
      })
    })
  }

  onSubmit(){
    const registrationData:IRegistrationData = this.registrationForm.value;
    this.registrationService.postRegistationData(registrationData);

  }

}
