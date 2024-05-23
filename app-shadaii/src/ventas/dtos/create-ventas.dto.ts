import { IsDate, IsInt} from 'class-validator';

export class CreateVentasDto{
    @IsInt()
    id: number;
    @IsDate()
    fecha_venta: Date;
}