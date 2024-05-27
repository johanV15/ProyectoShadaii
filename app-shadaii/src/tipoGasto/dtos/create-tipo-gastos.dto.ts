import {IsDate, IsInt, IsNumber, IsString} from 'class-validator';

export class CreateTipoGastosDto{
    @IsInt()
    id: number;
    @IsString()
    nombre: string;
}