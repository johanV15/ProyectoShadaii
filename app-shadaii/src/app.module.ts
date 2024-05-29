import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes/clientes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DetallePedidosModule } from './detallePedidos/detalle-pedidos.module';
import { DetalleVentasModule } from './detalleVentas/detalle-ventas.module';
import { GastosModule } from './gastos/gastos.module';
import { PagosModule } from './pagos/pagos.module';
import { StockModule } from './stockProductos/stock.module';
import { TipoGastosModule } from './tipoGasto/tipo-gastos.module';
import { VentasController } from './ventas/controllers/ventas.controller';
import { VentasService } from './ventas/services/ventas.service';
import { ClientesController } from "./clientes/controllers/clientes-controller";
import { ProductosController } from "./productos/controllers/productos.controllers";
import { ClientesService } from './clientes/services/clientes.service';
import { ProductosService } from './productos/services/productos.service';
import { DetalleVentasController } from './detalleVentas/controllers/detalle-ventas.controller';
import { DetalleVentasService } from './detalleVentas/services/detalle-ventas.service';
import { GastosController } from './gastos/controllers/gastos.controller';
import { GastosService } from './gastos/services/gastos.service';
import { PagosService } from './pagos/services/pagos.service';
import { PagosController } from './pagos/controllers/pagos.controllers';
import { StockService } from './stockProductos/services/stock.service';
@Module({
  imports: [ClientesModule, PrismaModule, ProductosModule, VentasModule, PedidosModule, DetallePedidosModule, DetalleVentasModule, GastosModule, PagosModule, StockModule, TipoGastosModule, PagosModule],
  controllers: [AppController, VentasController, ClientesController, ProductosController, DetalleVentasController, GastosController, PagosController],
  providers: [VentasService, ClientesService, ProductosService, DetalleVentasService, GastosService, PagosService, StockService],
})
export class AppModule {}
