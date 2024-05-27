import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DetalleVentasService } from '../services/detalle-ventas.service';
import { CreateDetalleVentasDto } from '../dtos/create-detalle-ventas.dto';
import { UpdateDetalleVentasDto } from '../dtos/update-detalle-ventas.dto';

@Controller('DetalleVentas')
export class DetalleVentasController {
  constructor(private readonly detalleVentasService: DetalleVentasService) {}

  @Post()
  create(@Body() createDetalleVentasDto: CreateDetalleVentasDto) {
    return this.detalleVentasService.create(createDetalleVentasDto);
  }

  @Get()
  findAll() {
    return this.detalleVentasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleVentasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleVentasDto: UpdateDetalleVentasDto) {
    return this.detalleVentasService.update(+id, updateDetalleVentasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleVentasService.remove(+id);
  }
}