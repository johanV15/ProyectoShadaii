import { Module } from '@nestjs/common';
import { PagosService } from './services/pagos.service';
import { PagosController } from './controllers/pagos.controllers';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}