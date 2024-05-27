import { Module } from '@nestjs/common';
import { GastosService } from './services/gastos.service';
import { GastosController } from './controllers/gastos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {}