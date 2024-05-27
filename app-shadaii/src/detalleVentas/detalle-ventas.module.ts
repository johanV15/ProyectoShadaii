import { Module } from '@nestjs/common';
import { DetalleVentasService } from './services/detalle-ventas.service';
import { DetalleVentasController } from './controllers/detalle-ventas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DetalleVentasController],
  providers: [DetalleVentasService],
})
export class DetalleVentasModule {}