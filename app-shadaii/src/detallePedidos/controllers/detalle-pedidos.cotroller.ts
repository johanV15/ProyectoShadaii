import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DetallePedidosService } from '../services/detalle-pedidos.service';
import { CreateDetallePedidosDto } from '../dtos/create-detalle-pedidos.dto';
import { UpdateDetallePedidosDto } from '../dtos/update-detalle-pedidos.dto';

@Controller('DetallePedidos')
export class DetallePedidosController {
  constructor(private readonly detallePedidosService: DetallePedidosService) {}
/*
  @Post()
  create(@Body() createDetallePedidosDto: CreateDetallePedidosDto) {
    return this.detallePedidosService.create(createDetallePedidosDto);
  }*/

  @Get()
  findAll() {
    return this.detallePedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallePedidosService.findOne(+id);
  }
/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallePedidosDto: UpdateDetallePedidosDto) {
    return this.detallePedidosService.update(+id, updateDetallePedidosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallePedidosService.remove(+id);
  }*/
}