import { IsDate, IsInt, IsOptional} from 'class-validator';

export class UpdateVentasDto{
    @IsInt()
    @IsOptional()
    id?: number;
    @IsDate()
    @IsOptional()
    fecha_venta?: Date;
}