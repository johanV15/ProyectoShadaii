import {IsBoolean, IsDate, IsInt, IsNumber, IsOptional} from 'class-validator';

export class UpdatePagosDto{
    @IsInt()
    @IsOptional()
    id_venta?: number;

    @IsInt()
    @IsOptional()
    id_cliente?: number;

    @IsDate()
    @IsOptional()
    fecha_pago?: Date;

    @IsNumber()
    @IsOptional()
    total_pago?: number;

    @IsBoolean()
    @IsOptional()
    pagado?: boolean;
}