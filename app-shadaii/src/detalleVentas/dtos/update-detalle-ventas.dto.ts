import {IsInt, IsNumber, IsOptional} from 'class-validator';

export class CreateDetalleVentasDto{
    @IsInt()
    @IsOptional()
    id?: number;

    @IsInt()
    @IsOptional()
    id_venta?: number;

    @IsInt()
    @IsOptional()
    id_producto?: number;

    @IsInt()
    @IsOptional()
    id_cliente?: number;

    @IsInt()
    @IsOptional()
    cantidad?: number;

    @IsNumber()
    @IsOptional()
    subtotal?: number;
}