import {IsDate, IsInt, IsNumber, IsString} from 'class-validator';

export class CreateGastosDto{
    @IsInt()
    id: number;
    @IsInt()
    id_tipo: number;
    @IsString()
    descripcion: string;
    @IsDate()
    fecha_gasto: Date;
    @IsNumber()
    valor: number;
}