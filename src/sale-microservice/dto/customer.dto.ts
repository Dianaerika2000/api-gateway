import { IsString } from "class-validator";

export class CustomerDto {
  @IsString()
  name: string;
}