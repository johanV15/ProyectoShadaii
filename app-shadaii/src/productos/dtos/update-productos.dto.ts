import {IsInt, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateProductosDto{
    @IsInt()
    @IsOptional()
    id?: number;

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    precio_venta?: number;
}