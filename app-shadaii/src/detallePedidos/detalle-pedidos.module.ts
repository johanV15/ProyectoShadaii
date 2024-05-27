import { Module } from '@nestjs/common';
import { DetallePedidosService } from './services/detalle-pedidos.service';
import { DetallePedidosController } from './controllers/detalle-pedidos.cotroller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService],
})
export class DetallePedidosModule {}