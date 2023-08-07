import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { IRegistrationData } from '../../interfaces/registration.interface';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  paymentInfoId: string;
  selectedIndex = 0;
  @ViewChild('successMessage') successMessage: TemplateRef<any>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.selectIndexAndGetData();
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

  // know at which step we should be after refreshing the page

  private selectIndexAndGetData() {
    const personalInfoInLocalStorage = JSON.parse(
      localStorage.getItem('personalInfo') || '{}'
    );
    const addressInfoInLocalStorage = JSON.parse(
      localStorage.getItem('addressInfo') || '{}'
    );
    if (Object.keys(addressInfoInLocalStorage).length) {
      this.selectedIndex = 1;
      this.addressInfoForm.setValue(addressInfoInLocalStorage);
      this.personalInfoForm.setValue(personalInfoInLocalStorage);
    } else if (Object.keys(personalInfoInLocalStorage).length) {
      this.selectedIndex = 0;
      this.personalInfoForm.setValue(personalInfoInLocalStorage);
    }
  }

  private removeItemsFromLocalStorage() {
    localStorage.removeItem('personalInfo');
    localStorage.removeItem('addressInfo');
    localStorage.removeItem('paymentInfo');
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
        localStorage.setItem('customer', JSON.stringify(registrationData));
        this.registrationForm.reset();
        this.removeItemsFromLocalStorage();
      },
      (error) => console.error(error)
    );
  }

  //save steps in localstorage

  savePersonalInfo() {
    const personalInfo = this.personalInfoForm.value;
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
  }
  saveAddressInfo() {
    const addressInfo = this.addressInfoForm.value;
    localStorage.setItem('addressInfo', JSON.stringify(addressInfo));
  }
  savePaymentInfo() {
    const paymentInfo = this.paymentInfoForm.value;
    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
  }
}
