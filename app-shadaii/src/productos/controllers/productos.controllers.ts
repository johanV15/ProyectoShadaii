import { Controller, Get, Post, Body, Param, Patch, Delete, Render, Res } from '@nestjs/common';
import { ProductosService } from '../services/productos.service';
import { CreateProductosDto } from '../dtos/create-productos.dto';
import { UpdateProductosDto } from '../dtos/update-productos.dto';
import { Response } from 'express';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductosDto: CreateProductosDto) {
    return this.productosService.create(createProductosDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const productos = await this.productosService.findAll();
    return res.status(200).json(productos);
  }

  @Get('view')
  @Render('productos')
  async getProductos() {
    const productos = await this.productosService.findAll();
    return { productos };
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const producto = await this.productosService.findOne(+id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.status(200).json(producto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto, @Res() res: Response) {
    try {
      const productoActualizado = await this.productosService.update(+id, updateProductosDto);
      if (!productoActualizado) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.status(200).json(productoActualizado);
    } catch (error) {
      return res.status(400).json({ message: 'Error al actualizar el producto', error });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const productoEliminado = await this.productosService.remove(+id);
      if (!productoEliminado) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: 'Error al eliminar el producto', error });
    }
  }
}
