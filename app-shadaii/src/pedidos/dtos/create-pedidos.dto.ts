import {IsInt} from 'class-validator';

export class CreatePedidosDto{
    @IsInt()
    id: number;
    @IsInt()
    id_gasto: number;
}