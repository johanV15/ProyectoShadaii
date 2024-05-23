import {IsInt, IsOptional} from 'class-validator';

export class UpdateDetallePedidosDto{
    @IsInt()
    @IsOptional()
    id?: number;

    @IsInt()
    @IsOptional()
    id_pedido?: number;

    @IsInt()
    @IsOptional()
    id_producto?: number;

    @IsInt()
    @IsOptional()
    cantidad_producto?: number;

}