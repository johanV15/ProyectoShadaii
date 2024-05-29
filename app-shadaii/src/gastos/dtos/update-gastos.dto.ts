import {IsDate, IsInt, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateGastosDto{

    @IsInt()
    @IsOptional()
    id_tipo: number;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsDate()
    @IsOptional()
    fecha_gasto: Date;

    @IsNumber()
    @IsOptional()
    valor: number;
}