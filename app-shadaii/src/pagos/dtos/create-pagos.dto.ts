import {IsBoolean, IsDate, IsInt, IsNumber} from 'class-validator';

export class CreatePagosDto{
    @IsInt()
    id_venta: number;
    @IsInt()
    id_cliente: number;
    @IsDate()
    fecha_pago: Date;
    @IsNumber()
    total_pago: number;
    @IsBoolean()
    pagado: boolean;
}