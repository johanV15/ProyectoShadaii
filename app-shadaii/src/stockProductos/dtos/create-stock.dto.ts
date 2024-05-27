import {IsDate, IsInt, IsNumber, IsString} from 'class-validator';

export class CreateStockDto{
    @IsInt()
    id: number;
    @IsInt()
    id_producto: number;
    @IsString()
    referencia_pedido: string;
    @IsNumber()
    stock: number;
    @IsDate()
    fecha_vencimineto: Date;
}