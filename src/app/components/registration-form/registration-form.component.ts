import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { IRegistrationData } from '../../interfaces/registration.interface';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'console';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  paymentInfoId: string;
  selectedIndex: 0;
  @ViewChild('successMessage') successMessage: TemplateRef<any>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService,
    private readonly dialog: MatDialog
  ) {
    this.initForm();
  }

  get personalInfoForm() {
    return this.registrationForm.get('personalInfo') as FormGroup;
  }
  get addressInfoForm() {
    return this.registrationForm.get('addressInfo') as FormGroup;
  }
  get paymentInfoForm() {
    return this.registrationForm.get('paymentInfo') as FormGroup;
  }

  private initForm() {
    this.registrationForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
      }),
      addressInfo: this.fb.group({
        street: this.fb.control('', Validators.required),
        houseNumber: this.fb.control('', Validators.required),
        zipCode: this.fb.control('', Validators.required),
        city: this.fb.control('', Validators.required),
      }),
      paymentInfo: this.fb.group({
        accountOwner: this.fb.control('', Validators.required),
        IBAN: this.fb.control('', Validators.required),
      }),
    });
  }

  private saveDateToLocalStorage(data: IRegistrationData) {
    let savedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
    console.log(savedCustomers);
    savedCustomers.push(data);
    localStorage.setItem('customers', JSON.stringify(savedCustomers));
  }

  onSubmit() {
    if (!this.registrationForm.valid) {
      return;
    }
    const registrationData: IRegistrationData = this.registrationForm.value;
    this.registrationService.postRegistationData(registrationData).subscribe(
      (returnedData) => {
        registrationData.paymentIdInfo,
          (this.paymentInfoId = returnedData.paymentDataId);
        this.dialog.open(this.successMessage);
        this.saveDateToLocalStorage(registrationData);
        this.registrationForm.reset();
        this.registrationForm.setErrors(null);
        this.selectedIndex = 0;
      },
      (error) => console.error(error)
    );
  }
}
