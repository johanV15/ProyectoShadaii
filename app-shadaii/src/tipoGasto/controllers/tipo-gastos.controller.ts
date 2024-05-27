import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TipoGastosService } from '../services/tipo-gastos.service';
import { CreateTipoGastosDto } from '../dtos/create-tipo-gastos.dto';
import { UpdateTipoGastosDto } from '../dtos/update-tipo-gastos.dto';

@Controller('TipoGastos')
export class TipoGastosController {
  constructor(private readonly tipoGastosService: TipoGastosService) {}

  @Post()
  create(@Body() createTipoGastosDto: CreateTipoGastosDto) {
    return this.tipoGastosService.create(createTipoGastosDto);
  }

  @Get()
  findAll() {
    return this.tipoGastosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoGastosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoGastosDto: UpdateTipoGastosDto) {
    return this.tipoGastosService.update(+id, updateTipoGastosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoGastosService.remove(+id);
  }
}