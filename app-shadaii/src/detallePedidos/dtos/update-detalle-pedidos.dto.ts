import {IsInt, IsString, IsOptional} from 'class-validator';

export class UpdateDetallePedidosDto{
    @IsInt()
    @IsOptional()
    id?: number;

    @IsString()
    @IsOptional()
    id_pedido?: string;

    @IsInt()
    @IsOptional()
    id_producto?: number;

    @IsInt()
    @IsOptional()
    cantidad_producto?: number;

}