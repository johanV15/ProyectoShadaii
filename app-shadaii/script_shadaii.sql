
CREATE TABLE ventas (
    id serial NOT NULL,
    fecha_venta TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Gastos (
    id serial NOT NULL,
    id_tipo bigint NOT NULL,
    descripcion TEXT,
    fecha_gasto TIMESTAMP NOT NULL,
    valor money NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Productos (
    id serial NOT NULL,
    nombre VARCHAR(36) NOT NULL,
    precio_venta money NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Clientes (
    id bigint NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE Pedidos ( 
    id varchar(10) NOT NULL, 
    id_gasto bigint NOT NULL, 
    PRIMARY KEY (id) 
); 

CREATE TABLE Detalle_Pedidos ( 
    id serial NOT NULL, 
    id_pedido varchar(10) NOT NULL, 
    id_producto bigint NOT NULL, 
    cantidad_producto INT NOT NULL, 
    PRIMARY KEY (id) 
); 

CREATE TABLE Stock_Productos (
    id serial NOT NULL,
    referencia_pedido varchar(10) NOT NULL,
    id_producto bigint NOT NULL,
    stock INT NOT NULL,
    fecha_vencimiento TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE Detalle_Ventas (
    id serial NOT NULL,
    id_venta bigint NOT NULL,
    id_producto bigint NOT NULL,
    id_cliente bigint NOT NULL,
    cantidad INT NOT NULL,
    subtotal money NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Pagos (
    id serial NOT NULL,
    id_venta bigint NOT NULL,
    id_cliente bigint NOT NULL,
    fecha_pago TIMESTAMP NOT NULL,
    total_pago money NOT NULL,
    pagado  boolean NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Tipo_Gasto (
    id serial NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


-- CONSTRAINTS

--tabla Pedidos
ALTER TABLE Pedidos	
ADD CONSTRAINT fk_pedidos_gasto
FOREIGN KEY (id_gasto) REFERENCES Gastos(id);
--ON DELETE CASCADE;

--tabla Detalle_Pedidos
ALTER TABLE Detalle_Pedidos
ADD CONSTRAINT fk_detallePedidos_pedido
FOREIGN KEY (id_pedido) REFERENCES Pedidos(id);
--ON DELETE CASCADE;

ALTER TABLE Detalle_Pedidos
ADD CONSTRAINT fk_detallePedidos_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);
--ON DELETE CASCADE;

-- tabla Stock_Productos
ALTER TABLE Stock_Productos
ADD CONSTRAINT fk_stockProductos_pedido
FOREIGN KEY (referencia_pedido) REFERENCES Pedidos(id);
--ON DELETE CASCADE;

ALTER TABLE Stock_Productos
ADD CONSTRAINT fk_stockProductos_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);
--ON DELETE CASCADE;

-- tabla Detalle_Ventas
ALTER TABLE Detalle_Ventas
ADD CONSTRAINT fk_detalleVentas_venta
FOREIGN KEY (id_venta) REFERENCES Ventas(id);
--ON DELETE CASCADE;

ALTER TABLE Detalle_Ventas
ADD CONSTRAINT fk_detalleVentas_producto
FOREIGN KEY (id_producto) REFERENCES Productos(id);
--ON DELETE CASCADE;

ALTER TABLE Detalle_Ventas
ADD CONSTRAINT fk_detalleVentas_cliente
FOREIGN KEY (id_cliente) REFERENCES Clientes(id);
--ON DELETE CASCADE;

ALTER TABLE Pagos
ADD CONSTRAINT fk_Pagos_venta
FOREIGN KEY (id_venta) REFERENCES Ventas(id);
--ON DELETE CASCADE;

ALTER TABLE Pagos
ADD CONSTRAINT fk_Pagos_cliente
FOREIGN KEY (id_cliente) REFERENCES Clientes(id);
--ON DELETE CASCADE;

ALTER TABLE Gastos
ADD CONSTRAINT fk_tipo_gasto
FOREIGN KEY (id_tipo) REFERENCES Tipo_Gasto(id);
--ON DELETE CASCADE;

-- INSERTS
INSERT INTO  Tipo_Gasto (id,nombre) VALUES
(1, 'Otro'),
(2, 'Servicio Público'),
(3, 'Pedido');

INSERT INTO Productos (id, nombre, precio_venta) VALUES
(1, 'Bloc carta blanco', 4500),
(2, 'Bloc carta cuadriculado', 4500),
(3, 'Bloc iris carta', 4000),
(4, 'Bloc oficio blanco', 5200),
(5, 'Bloc oficio cuadriculado', 5200),
(6, 'Borrador blanco grande', 600),
(7, 'Borrador blanco pequeño', 400),
(8, 'Borrador negro grande', 800),
(9, 'Caja de plastilina de 13 colores', 3000),
(10, 'Caja de plastilina de 9 colores', 2200),
(11, 'Carpeta cartón carta', 600),
(12, 'Carpeta cartón oficio', 600),
(13, 'Carpeta legajadora azul', 4000),
(14, 'Carpeta legajadora negra', 4000),
(15, 'Carpeta legajadora roja', 4000),
(16, 'Carpeta legajadora verde', 4000),
(17, 'Carpeta presentación carta', 800),
(18, 'Carpeta Presentación oficio', 900),
(19, 'Cartón paja 1/2', 2500),
(20, 'Cartón paja 1/4', 1500),
(21, 'Cartón paja 1/8', 800),
(22, 'Cartulina 1/2', 1300),
(23, 'Cartulina 1/4', 800),
(24, 'Cartulina 1/8', 400),
(25, 'Cartulina pliego', 2000),
(26, 'Colores scribe 24 colores', 7000),
(27, 'Corrector líquido', 1800),
(28, 'Cuaderno cuadriculado de 100 hojas', 3800),
(29, 'Cuaderno cuadriculado de 50', 3000),
(30, 'Cuaderno rayado de 100 hojas', 3800),
(31, 'Cuaderno rayado de 50', 3000),
(32, 'Escuadra plástica 30cm', 3000),
(33, 'Esfero offi esco negro', 1000),
(34, 'Esfero offi esco rojo', 1000),
(35, 'Lápiz HB', 1000),
(36, 'Lápiz Micropuntas', 1500),
(37, 'Marcador permanente azul', 2000),
(38, 'Marcador permanente negro', 2000),
(39, 'Marcador permanente verde', 2000),
(40, 'Marcador Sharpie azul', 2000),
(41, 'Marcador Sharpie negro', 2000),
(42, 'Marcador Sharpie rojo', 2000),
(43, 'Marcador Sharpie verde', 2000),
(44, 'Palos balso # 10', 1000),
(45, 'Palos de balso # 6', 700),
(46, 'Palos de balso #1500', 1500),
(47, 'Palos de balso #20', 1800),
(48, 'Pegante marfil 20gr', 1000),
(49, 'Pinceles 10 al 12', 1300),
(50, 'Pinceles 6 al 9', 1000),
(51, 'Pinceles del 1 al 5', 600),
(52, 'Regla plástica 30cm', 2000),
(53, 'Silicona en barra delgada', 800),
(54, 'Silicona líquida de 30ml', 2300),
(55, 'Silicona líquida de 60 ML', 3200),
(56, 'Tijeras negras', 1200),
(57, 'Tijeras punta roma', 1600),
(58, 'Botella Agua cristal 600ml', 1400),
(59, 'Botella Agua cristal de 300ml', 700),
(60, 'Botella jugo del valle 400gr', 1800),
(61, 'Botella Jugo Hit Mora 500ml', 2600),
(62, 'Botella Jugo Hit Tropical 500ml', 2600),
(63, 'Botella Jugo Hit Mango 500ml', 2600),
(64, 'Botella Lulo', 2600),
(65, 'Botella Natu malta 200ml', 1400),
(66, 'Botella speed Max 250mil.', 1600),
(67, 'Botella Squash 500gr', 2200),
(68, 'Caja Hit Mango 1L', 4000),
(69, 'Caja Hit Tropical 1L', 4000),
(70, 'Chistris', 1800),
(71, 'Choclitos de limón', 1800),
(72, 'Chocolatina Gol 31gr', 1400),
(73, 'Chocolatina Jumbo mani 100gr', 5700),
(74, 'Chocolatina Jumbo mani 35gr', 2900),
(75, 'Chocolatina Romanaff', 5800),
(76, 'Chocolatina Jumbo flow 48gr', 2200),
(77, 'Chocorramo 65gr', 2300),
(78, 'De todito picantes', 2500),
(79, 'De todito natural', 2500),
(80, 'De todito mix', 2500),
(81, 'Doritos', 2200),
(82, 'Gala 60gr', 1600),
(83, 'Galletas Festival  6ud', 1300),
(84, 'Galletas Mini chip 35gr', 1500),
(85, 'Galletas Noel wafers  24gr', 800),
(86, 'Gaseosa Big Cola Lima Limon 400ml', 1500),
(87, 'Gaseosa Big Cola Manzana 400ml', 1500),
(88, 'Gaseosa Big Cola Negra 400ml', 1500),
(89, 'Gaseosa Big Cola Piña 400ml', 1500),
(90, 'Gaseosa Coca-Cola  400ml', 3000),
(91, 'Gaseosa Coca-Cola 1.5L', 6000),
(92, 'Gaseosa Coca-Cola 2L', 5700),
(93, 'Gaseosa Colombiana 1.25L', 3200),
(94, 'Gaseosa Colombiana 2.5L', 5200),
(95, 'Gaseosa Pepsi  1.25L', 3200),
(96, 'Gaseosa Pepsi Sin azúcar 250ml', 1200),
(97, 'Gaseosa Pepsi 2.5L', 5200),
(98, 'Gaseosa Quatro 1.5L', 4500),
(99, 'Gaseosa Quatro 400ml', 2500),
(100, 'Gaseosa Valle 1.5L', 4000),
(101, 'Lata Speed Max 269ml', 1600),
(102, 'Maisitos Picante', 2000),
(103, 'Maisitos Limón', 1900),
(104, 'Maisitos natural', 1900),
(105, 'Mani especial Kraks 25gr', 1200),
(106, 'Mani especial Aranda mix 25gr', 1700),
(107, 'Papas Yupi de pollo', 1300),
(108, 'Papas Margarita de pollo', 2200),
(109, 'Postobón Naranja 1.5L', 4000),
(110, 'Postobón Uva 1.5L', 4000),
(111, 'Ramo tradicional', 5600),
(112, 'Wafers Italo 117gr', 3300);

insert into gastos (id_tipo, descripcion, fecha_gasto, valor) 
values(3, 'pedido inicial', '01-08-2024 10:00:00', 500000);

insert into pedidos (id, id_gasto) values ('PED05', 5);

INSERT INTO Detalle_Pedidos (id_pedido, id_producto, cantidad_producto)
values ('PED05', 1, 10),
('PED05', 1, 10),
('PED05', 2, 10),
('PED05', 3, 10),
('PED05', 4, 10),
('PED05', 5, 10),
('PED05', 6, 10),
('PED05', 7, 10),
('PED05', 8, 10),
('PED05', 9, 10),
('PED05', 10, 10),
('PED05', 11, 10),
('PED05', 12, 10),
('PED05', 13, 10),
('PED05', 14, 10),
('PED05', 15, 10),
('PED05', 16, 10),
('PED05', 17, 10),
('PED05', 18, 10),
('PED05', 19, 10),
('PED05', 20, 10),
('PED05', 21, 10),
('PED05', 22, 10),
('PED05', 23, 10),
('PED05', 24, 10),
('PED05', 25, 10),
('PED05', 26, 10),
('PED05', 27, 10),
('PED05', 28, 10),
('PED05', 29, 10),
('PED05', 30, 10),
('PED05', 31, 10),
('PED05', 32, 10),
('PED05', 33, 10),
('PED05', 34, 10),
('PED05', 35, 10),
('PED05', 36, 10),
('PED05', 37, 10),
('PED05', 38, 10),
('PED05', 39, 10),
('PED05', 40, 10),
('PED05', 41, 10),
('PED05', 42, 10),
('PED05', 43, 10),
('PED05', 44, 10),
('PED05', 45, 10),
('PED05', 46, 10),
('PED05', 47, 10),
('PED05', 48, 10),
('PED05', 49, 10),
('PED05', 50, 10),
('PED05', 51, 10),
('PED05', 52, 10),
('PED05', 53, 10),
('PED05', 54, 10),
('PED05', 55, 10),
('PED05', 56, 10),
('PED05', 57, 10),
('PED05', 58, 10),
('PED05', 59, 10),
('PED05', 60, 10),
('PED05', 61, 10),
('PED05', 62, 10),
('PED05', 63, 10),
('PED05', 64, 10),
('PED05', 65, 10),
('PED05', 66, 10),
('PED05', 67, 10),
('PED05', 68, 10),
('PED05', 69, 10),
('PED05', 70, 10),
('PED05', 71, 10),
('PED05', 72, 10),
('PED05', 73, 10),
('PED05', 74, 10),
('PED05', 75, 10),
('PED05', 76, 10),
('PED05', 77, 10),
('PED05', 78, 10),
('PED05', 79, 10),
('PED05', 80, 10),
('PED05', 81, 10),
('PED05', 82, 10),
('PED05', 83, 10),
('PED05', 84, 10),
('PED05', 85, 10),
('PED05', 86, 10),
('PED05', 87, 10),
('PED05', 88, 10),
('PED05', 89, 10),
('PED05', 90, 10),
('PED05', 91, 10),
('PED05', 92, 10),
('PED05', 93, 10),
('PED05', 94, 10),
('PED05', 95, 10),
('PED05', 96, 10),
('PED05', 97, 10),
('PED05', 98, 10),
('PED05', 99, 10),
('PED05', 100, 10),
('PED05', 101, 10),
('PED05', 102, 10),
('PED05', 103, 10),
('PED05', 104, 10),
('PED05', 105, 10),
('PED05', 106, 10),
('PED05', 107, 10),
('PED05', 108, 10),
('PED05', 109, 10),
('PED05', 110, 10),
('PED05', 111, 10),
('PED05', 112, 10);

INSERT INTO Stock_Productos (referencia_pedido, id_producto, stock)
VALUES ('PED05', 1, 10),
('PED05', 2, 10),
('PED05', 3, 10),
('PED05', 4, 10),
('PED05', 5, 10),
('PED05', 6, 10),
('PED05', 7, 10),
('PED05', 8, 10),
('PED05', 9, 10),
('PED05', 10, 10),
('PED05', 11, 10),
('PED05', 12, 10),
('PED05', 13, 10),
('PED05', 14, 10),
('PED05', 15, 10),
('PED05', 16, 10),
('PED05', 17, 10),
('PED05', 18, 10),
('PED05', 19, 10),
('PED05', 20, 10),
('PED05', 21, 10),
('PED05', 22, 10),
('PED05', 23, 10),
('PED05', 24, 10),
('PED05', 25, 10),
('PED05', 26, 10),
('PED05', 27, 10),
('PED05', 28, 10),
('PED05', 29, 10),
('PED05', 30, 10),
('PED05', 31, 10),
('PED05', 32, 10),
('PED05', 33, 10),
('PED05', 34, 10),
('PED05', 35, 10),
('PED05', 36, 10),
('PED05', 37, 10),
('PED05', 38, 10),
('PED05', 39, 10),
('PED05', 40, 10),
('PED05', 41, 10),
('PED05', 42, 10),
('PED05', 43, 10),
('PED05', 44, 10),
('PED05', 45, 10),
('PED05', 46, 10),
('PED05', 47, 10),
('PED05', 48, 10),
('PED05', 49, 10),
('PED05', 50, 10),
('PED05', 51, 10),
('PED05', 52, 10),
('PED05', 53, 10),
('PED05', 54, 10),
('PED05', 55, 10),
('PED05', 56, 10),
('PED05', 57, 10);

INSERT INTO Stock_Productos (referencia_pedido, id_producto, stock, fecha_vencimiento)
values
('PED05', 58, 10, '2025-05-28'),
('PED05', 59, 10, '2025-05-28'),
('PED05', 60, 10, '2025-05-28'),
('PED05', 61, 10, '2025-05-28'),
('PED05', 62, 10, '2025-05-28'),
('PED05', 63, 10, '2025-05-28'),
('PED05', 64, 10, '2025-05-28'),
('PED05', 65, 10, '2025-05-28'),
('PED05', 66, 10, '2025-05-28'),
('PED05', 67, 10, '2025-05-28'),
('PED05', 68, 10, '2025-05-28'),
('PED05', 69, 10, '2025-05-28'),
('PED05', 70, 10, '2025-05-28'),
('PED05', 71, 10, '2025-05-28'),
('PED05', 72, 10, '2025-05-28'),
('PED05', 73, 10, '2025-05-28'),
('PED05', 74, 10, '2025-05-28'),
('PED05', 75, 10, '2025-05-28'),
('PED05', 76, 10, '2025-05-28'),
('PED05', 77, 10, '2025-05-28'),
('PED05', 78, 10, '2025-05-28'),
('PED05', 79, 10, '2025-05-28'),
('PED05', 80, 10, '2025-05-28'),
('PED05', 81, 10, '2025-05-28'),
('PED05', 82, 10, '2025-05-28'),
('PED05', 83, 10, '2025-05-28'),
('PED05', 84, 10, '2025-05-28'),
('PED05', 85, 10, '2025-05-28'),
('PED05', 86, 10, '2025-05-28'),
('PED05', 87, 10, '2025-05-28'),
('PED05', 88, 10, '2025-05-28'),
('PED05', 89, 10, '2025-05-28'),
('PED05', 90, 10, '2025-05-28'),
('PED05', 91, 10, '2025-05-28'),
('PED05', 92, 10, '2025-05-28'),
('PED05', 93, 10, '2025-05-28'),
('PED05', 94, 10, '2025-05-28'),
('PED05', 95, 10, '2025-05-28'),
('PED05', 96, 10, '2025-05-28'),
('PED05', 97, 10, '2025-05-28'),
('PED05', 98, 10, '2025-05-28'),
('PED05', 99, 10, '2025-05-28'),
('PED05', 100, 10, '2025-05-28'),
('PED05', 101, 10, '2025-05-28'),
('PED05', 102, 10, '2025-05-28'),
('PED05', 103, 10, '2025-05-28'),
('PED05', 104, 10, '2025-05-28'),
('PED05', 105, 10, '2025-05-28'),
('PED05', 106, 10, '2025-05-28'),
('PED05', 107, 10, '2025-05-28'),
('PED05', 108, 10, '2025-05-28'),
('PED05', 109, 10, '2025-05-28'),
('PED05', 110, 10, '2025-05-28'),
('PED05', 111, 10, '2025-05-28'),
('PED05', 112, 10, '2025-05-28');