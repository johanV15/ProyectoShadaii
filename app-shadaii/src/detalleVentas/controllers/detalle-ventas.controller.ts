import { Controller, Get, Post, Body, Param, Patch, Delete, Render } from '@nestjs/common';
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
  @Get('view')
  @Render('edit_ventas')
  async getDetalleVentas() {
    const detalleVentas = await this.detalleVentasService.findAll();
    return {detalleVentas};
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleVentasService.findOne(+id);
  }
  @Get('data')
  async getDetalleVentasData() {
    const detalleVentas = await this.detalleVentasService.findAll();
    return detalleVentas.map(detalle => ({
      fecha: detalle.venta.fecha_venta,
      valor: detalle.subtotal
    }));
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