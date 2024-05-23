import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateClientesDto{
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsInt()
    @IsOptional()
    id?: number;
    
    @IsString()
    @IsOptional()
    apellido?: string;
}