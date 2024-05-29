import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { CreatePedidosDto } from '../dtos/create-pedidos.dto';
import { UpdatePedidosDto } from '../dtos/update-pedidos.dto';

@Controller('Pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  create(@Body() createPedidosDto: CreatePedidosDto) {
    return this.pedidosService.create(createPedidosDto);
  }

  @Get()
  async getPedidosData() {
    const pedidos = await this.pedidosService.findAll();
    return {pedidos}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidosDto: UpdatePedidosDto) {
    return this.pedidosService.update(id, updatePedidosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(id);
  }
}