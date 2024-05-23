import {IsInt, IsNumber} from 'class-validator';

export class CreateDetalleVentasDto{
    @IsInt()
    id: number;
    @IsInt()
    id_venta: number;
    @IsInt()
    id_producto: number;
    @IsInt()
    id_cliente: number;
    @IsInt()
    cantidad: number;
    @IsNumber()
    subtotal: number;
}