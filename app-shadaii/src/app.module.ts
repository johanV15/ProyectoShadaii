import { Module } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
