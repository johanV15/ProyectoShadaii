import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateVentasDto } from '../dtos/create-ventas.dto';
import { UpdateVentasDto } from '../dtos/update-ventas.dto';
import { StockService } from 'src/stockProductos/services/stock.service';
import { ProductosService } from 'src/productos/services/productos.service';

@Injectable()
export class VentasService {
  constructor(
    private prisma: PrismaService,
    private stockService: StockService, // Servicio para manejar el stock
    private productosService: ProductosService
  ) {}

  async create(createVentasDto: CreateVentasDto) {
    const { id_producto, id_cliente, cantidad, fecha_venta } = createVentasDto;

    // Obtener el precio del producto
    const producto = await this.prisma.productos.findUnique({
      where: { id: id_producto },
    });
    if (!producto) {
      throw new BadRequestException('Producto no encontrado');
    }

    // Calcular el subtotal
    const subtotal = producto.precio_venta * cantidad;

    // Crear la venta
    const venta = await this.prisma.ventas.create({
      data: {
        fecha_venta,
        detalle_Ventas: {
          create: {
            id_producto: id_producto,
            id_cliente,
            cantidad,
            subtotal,
          },
        },
      },
    });

    // Actualizar el stock
    await this.stockService.updateStock(id_producto, cantidad);

    return venta;
  }

  async findAll() {
    return this.prisma.ventas.findMany({
      include: {
        detalle_Ventas: true,
        pagos: true,
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.ventas.findUnique({
      where: { id },
      include: {
        detalle_Ventas: true,
      },
    });
  }

  async update(id: number, updateVentasDto: UpdateVentasDto) {
    return this.prisma.ventas.update({
      where: { id },
      data: updateVentasDto,
    });
  }

  async remove(id: number) {
    return this.prisma.ventas.delete({
      where: { id },
    });
  }
}
