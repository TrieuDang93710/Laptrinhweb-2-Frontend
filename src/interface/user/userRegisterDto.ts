export interface UserRegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: number;
  authorities: Array<string>[];
}
