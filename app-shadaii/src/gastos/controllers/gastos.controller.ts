import { Controller, Get, Post, Body, Param, Patch, Delete, Render, Res } from '@nestjs/common';
import { GastosService } from '../services/gastos.service';
import { CreateGastosDto } from '../dtos/create-gastos.dto';
import { UpdateGastosDto } from '../dtos/update-gastos.dto';
import { Response } from 'express';

@Controller('Gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  async create(@Body() createGastosDto: CreateGastosDto) {
    return this.gastosService.create(createGastosDto);
  }
  

  @Get()
  findAll() {
    return this.gastosService.findAll();
  }
  @Get('data')
  async getGastosData() {
    const gastos = await this.gastosService.findAll();
    return {gastos};
  }
  @Get('view')
  @Render('gastos')
  async getGastos() {
    const gastos = await this.gastosService.findAll();
    return {gastos};
  }
  @Get('edit_view')
  @Render('edit_gastos')
  async getEditGastos() {
    const gastos = await this.gastosService.findAll();
    return {gastos};
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gastosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGastosDto: UpdateGastosDto) {
    return this.gastosService.update(+id, updateGastosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gastosService.remove(+id);
  }
}
