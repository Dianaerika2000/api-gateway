import { IsString, IsNumber, ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductQuantityDto {
  @IsString()
  idProduct: string;

  @IsNumber()
  quantity: number;
}

// export class ProductQuantityArrayDto {
//   @ArrayMinSize(1)
//   @ValidateNested({ each: true })
//   @Type(() => ProductQuantityDto)
//   products: ProductQuantityDto[];
// }
