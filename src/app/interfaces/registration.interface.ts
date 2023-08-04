export interface IRegistrationData {
  personalInfo: {
    firstName: string;
    lastName: string;
  };
  addressInfo: {
    street: string;
    houseNumber: number;
    zipCode: number;
    city: string;
  };
  paymentInfo: {
    accountOwner: string;
    IBAN: number;
  };
  paymentIdInfo?: string
}
