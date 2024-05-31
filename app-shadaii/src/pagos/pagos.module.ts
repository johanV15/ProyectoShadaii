import { Module } from '@nestjs/common';
import { PagosService } from './services/pagos.service';
import { PagosController } from './controllers/pagos.controllers';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [PagosController],
  providers: [PagosService, PrismaService],
})
export class PagosModule {}