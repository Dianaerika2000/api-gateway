import { IsString } from "class-validator";

export class RolDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
