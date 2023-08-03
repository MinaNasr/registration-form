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
      ...registrationData.paymentInfo,
      customerId: Date.now().toString(),
    };

    return this.http.post(
      'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data',
      paymentData
    );
  }
}
