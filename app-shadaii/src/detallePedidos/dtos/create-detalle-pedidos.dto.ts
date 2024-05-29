import {IsInt, IsString} from 'class-validator';

export class CreateDetallePedidosDto{
    @IsInt()
    id: number;
    @IsString()
    id_pedido: string;
    @IsInt()
    id_producto: number;
    @IsInt()
    cantidad_producto: number;

}