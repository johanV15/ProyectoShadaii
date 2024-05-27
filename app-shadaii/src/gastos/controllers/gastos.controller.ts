import { Controller, Get, Post, Body, Param, Patch, Delete, Render, Res } from '@nestjs/common';
import { GastosService } from '../services/gastos.service';
import { CreateGastosDto } from '../dtos/create-gastos.dto';
import { UpdateGastosDto } from '../dtos/update-gastos.dto';
import { Response } from 'express';

@Controller('Gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  async create(@Body() createGastosDto: CreateGastosDto, @Res() res: Response) {
    try {
      const gasto = await this.gastosService.create(createGastosDto);
      return res.status(201).json(gasto);
    } catch (error) {
      return res.status(500).json({ message: 'Error al registrar el gasto' });
    }
  }

  @Get()
  findAll() {
    return this.gastosService.findAll();
  }

  @Get('view')
  @Render('gastos')
  getGastos() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gastosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGastosDto: UpdateGastosDto) {
    return this.gastosService.update(+id, updateGastosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gastosService.remove(+id);
  }
}
