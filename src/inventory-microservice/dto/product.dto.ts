import { IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsString()
    brand: string;

    @IsString()
    code: string;

    @IsString()
    description: string;
    
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;

    @IsString()
    unitMeasurement: string

    @IsString()
    idCategory: string;
}