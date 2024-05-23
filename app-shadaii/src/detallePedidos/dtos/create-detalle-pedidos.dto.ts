import {IsInt} from 'class-validator';

export class CreateDetallePedidosDto{
    @IsInt()
    id: number;
    @IsInt()
    id_pedido: number;
    @IsInt()
    id_producto: number;
    @IsInt()
    cantidad_producto: number;

}