import {IsDate, IsInt, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateTipoGastosDto{
    @IsInt()
    @IsOptional()

    id?: number;
    @IsString()
    @IsOptional()

    nombre?: string;
}