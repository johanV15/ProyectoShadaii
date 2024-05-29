import {IsInt, IsNumber, IsString} from 'class-validator';

export class CreateProductosDto{
    @IsString()
    nombre: string;
    @IsNumber()
    precio_venta: number;
}