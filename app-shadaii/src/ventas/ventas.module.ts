import { Module } from '@nestjs/common';
import { VentasService } from './services/ventas.service';
import { VentasController } from './controllers/ventas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}