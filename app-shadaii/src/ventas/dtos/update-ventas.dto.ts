import { IsDate, IsInt, IsOptional} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateVentasDto } from './create-ventas.dto';

export class UpdateVentasDto extends PartialType(CreateVentasDto){
    @IsOptional()
    fecha_venta?: Date;
    id_producto: number;
    cantidad: number;
  
}