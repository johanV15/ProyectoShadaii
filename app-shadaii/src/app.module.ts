import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes/clientes.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [ClientesModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
