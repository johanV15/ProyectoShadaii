import {IsInt, IsOptional, IsString} from 'class-validator';

export class UpdatePedidosDto{
    @IsString()
    @IsOptional()
    id?: string;
    @IsInt()
    @IsOptional()
    id_gasto?: number;
}