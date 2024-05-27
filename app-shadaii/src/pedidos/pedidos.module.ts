import { Module } from '@nestjs/common';
import { PedidosService } from './services/pedidos.service';
import { PedidosController } from './controllers/pedidos.controllers';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}