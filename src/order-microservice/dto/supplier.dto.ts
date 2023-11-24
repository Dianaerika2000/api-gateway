import { IsEmail, IsString } from "class-validator";

export class SupplierDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  cellphone: string;

  @IsString()
  company: string;
}