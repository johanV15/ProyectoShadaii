import { Controller, Get, Post, Body, Param, Patch, Delete, Render } from '@nestjs/common';
import { VentasService } from '../services/ventas.service';
import { CreateVentasDto } from '../dtos/create-ventas.dto';
import { UpdateVentasDto } from '../dtos/update-ventas.dto';

@Controller('Ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() createVentasDto: CreateVentasDto) {
    return this.ventasService.create(createVentasDto);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }
  @Get('view')
  @Render('ventas')
  getVentas() {
    return {};
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(+id);
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentasDto: UpdateVentasDto) {
    return this.ventasService.update(+id, updateVentasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }
}