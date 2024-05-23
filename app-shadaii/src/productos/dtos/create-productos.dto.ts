import {IsInt, IsNumber, IsString} from 'class-validator';

export class CreateProductosDto{
    @IsInt()
    id: number;
    @IsString()
    nombre: string;
    @IsNumber()
    precio_venta: number;
}