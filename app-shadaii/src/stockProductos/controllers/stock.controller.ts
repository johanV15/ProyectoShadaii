import { Controller, Get, Post, Body, Param, Patch, Delete, Render, BadRequestException } from '@nestjs/common';
import { StockService } from '../services/stock.service';
import { CreateStockDto } from '../dtos/create-stock.dto';
import { UpdateStockDto } from '../dtos/update-stock.dto';

@Controller('Stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }
  @Get('view')
  @Render('inventario')
  getStock() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    const { id_producto, stock } = updateStockDto;

    // Validar que se haya proporcionado un id_producto y una cantidad
    if (!id_producto || stock === undefined) {
      throw new BadRequestException('id_producto y cantidad son requeridos');
    }

    return this.stockService.updateStock(id_producto, stock);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}