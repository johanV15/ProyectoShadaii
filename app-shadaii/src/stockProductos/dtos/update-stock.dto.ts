import {IsDate, IsInt, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateStockDto{
    @IsInt()
    @IsOptional()
    id?: number;
    @IsInt()
    @IsOptional()

    id_producto?: number;
    @IsString()
    @IsOptional()

    referencia_pedido?: string;
    @IsNumber()

    stock?: number;
    @IsDate()
    @IsOptional()

    fecha_vencimineto?: Date;
}