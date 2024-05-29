import { IsDate, IsInt, IsPositive} from 'class-validator';

export class CreateVentasDto{
    @IsInt()
  id_producto: number;

  @IsInt()
  id_cliente: number;

  @IsInt()
  @IsPositive()
  cantidad: number;
    @IsDate()
    fecha_venta: Date;
}