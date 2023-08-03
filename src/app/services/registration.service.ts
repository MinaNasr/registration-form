import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegistrationData } from '../interfaces/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private readonly http: HttpClientModule) { }

  postRegistationData(registrationDate: IRegistrationData){
    
  }
}
