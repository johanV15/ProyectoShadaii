import { Module } from '@nestjs/common';
import { TipoGastosService } from './services/tipo-gastos.service';
import { TipoGastosController } from './controllers/tipo-gastos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoGastosController],
  providers: [TipoGastosService],
})
export class TipoGastosModule {}