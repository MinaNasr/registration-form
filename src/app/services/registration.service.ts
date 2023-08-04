import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegistrationData } from '../interfaces/registration.interface';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private readonly http: HttpClient) {}

  postRegistationData(registrationData: IRegistrationData) {
    const paymentData = {
      iban : registrationData.paymentInfo.IBAN,
      owner: registrationData.paymentInfo.accountOwner,
      customerId: Date.now().toString(),
    };

    return this.http.post<{paymentDataId: string}>(
      '/default/wunderfleet-recruiting-backend-dev-save-payment-data',
      paymentData
    );
  }
}
