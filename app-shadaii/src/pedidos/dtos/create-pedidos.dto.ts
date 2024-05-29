import {IsInt, IsString} from 'class-validator';

export class CreatePedidosDto{
    @IsString()
    id: string;
    @IsInt()
    id_gasto: number;
}