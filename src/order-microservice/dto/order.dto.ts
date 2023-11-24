import { Type } from 'class-transformer';
import { IsArray, IsDate, IsDateString, IsNumber, IsString, ValidateNested } from 'class-validator';
class OrderDetailsDto {
  @IsNumber()
  product_id: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class OrderDto {
  @IsDateString()
  deliveryDate: string;

  @IsString()
  status: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  supplierId: number;
  
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderDetailsDto)
  details: OrderDetailsDto[];
}