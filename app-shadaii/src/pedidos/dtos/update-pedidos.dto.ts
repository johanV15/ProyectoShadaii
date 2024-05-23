import {IsInt, IsOptional} from 'class-validator';

export class UpdatePedidosDto{
    @IsInt()
    @IsOptional()
    id?: number;
    @IsInt()
    @IsOptional()
    id_gasto?: number;
}