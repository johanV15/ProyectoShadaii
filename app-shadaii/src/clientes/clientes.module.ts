import { Module } from '@nestjs/common';
import { ClientesService } from './services/clientes.service';
import { ClientesController } from './controllers/clientes-controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}