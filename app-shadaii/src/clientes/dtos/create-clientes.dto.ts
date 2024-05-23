import { IsInt, IsString } from 'class-validator';

export class CreateClientesDto{
    @IsString()
    nombre: string;

    @IsInt()
    id: number;
    
    @IsString()
    apellido: string;
}