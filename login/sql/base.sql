-- Crear tabla Producto
CREATE TABLE Producto (
    idProducto NUMBER PRIMARY KEY,
    idCategoria NUMBER,
    idSubcategoria NUMBER,
    idCaracteristica NUMBER,
    idClasificacion NUMBER,
    idTemporada NUMBER,
    nombre VARCHAR2(100),
    descripcion VARCHAR2(255),
    CONSTRAINT fk_categoria FOREIGN KEY (idCategoria) REFERENCES Categoria(idCategoria),
    CONSTRAINT fk_subcategoria FOREIGN KEY (idSubcategoria) REFERENCES Subcategoria(idSubcategoria),
    CONSTRAINT fk_caracteristica FOREIGN KEY (idCaracteristica) REFERENCES Caracteristica(idCaracteristica),
    CONSTRAINT fk_clasificacion FOREIGN KEY (idClasificacion) REFERENCES Clasificacion(idClasificacion),
    CONSTRAINT fk_temporada FOREIGN KEY (idTemporada) REFERENCES Temporada(idTemporada)
);

-- Crear tabla Categoria
CREATE TABLE Categoria (
    idCategoria NUMBER PRIMARY KEY,
    idSubcategoria NUMBER,
    nombre VARCHAR2(100),
    estado VARCHAR2(50),
    talla VARCHAR2(50),
    CONSTRAINT fk_subcategoria_categoria FOREIGN KEY (idSubcategoria) REFERENCES Subcategoria(idSubcategoria)
);

-- Crear tabla Subcategoria
CREATE TABLE Subcategoria (
    idSubcategoria NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    color VARCHAR2(50)
);

-- Crear tabla Caracteristica
CREATE TABLE Caracteristica (
    idCaracteristica NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    color VARCHAR2(50),
    tamaño VARCHAR2(50),
    talla VARCHAR2(50),
    presentacion VARCHAR2(50)
);

-- Crear tabla Clasificacion
CREATE TABLE Clasificacion (
    idClasificacion NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    estado VARCHAR2(50)
);

-- Crear tabla Temporada
CREATE TABLE Temporada (
    idTemporada NUMBER PRIMARY KEY,
    idCategoria NUMBER,
    nombre VARCHAR2(100),
    estado VARCHAR2(50),
    CONSTRAINT fk_categoria_temporada FOREIGN KEY (idCategoria) REFERENCES Categoria(idCategoria)
);

-- Crear tabla Cliente
CREATE TABLE Cliente (
    idCliente NUMBER PRIMARY KEY,
    nombre VARCHAR2(100),
    apellido VARCHAR2(100),
    NIT VARCHAR2(20)
);

-- Crear tabla Entregas
CREATE TABLE Entregas (
    idEntrega NUMBER PRIMARY KEY,
    idCliente NUMBER,
    fechaEntrega DATE,
    idFactura NUMBER,
    direccion VARCHAR2(255),
    direccion2 VARCHAR2(255),
    ciudad VARCHAR2(100),
    pais VARCHAR2(100),
    municipio_estado VARCHAR2(100),
    CONSTRAINT fk_cliente_entrega FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
    CONSTRAINT fk_factura_entrega FOREIGN KEY (idFactura) REFERENCES Factura(idFactura)
);

-- Crear tabla Factura
CREATE TABLE Factura (
    idFactura NUMBER PRIMARY KEY,
    idEntrega NUMBER,
    CONSTRAINT fk_entrega_factura FOREIGN KEY (idEntrega) REFERENCES Entregas(idEntrega)
);

-- Crear tabla TarjetaPagos
CREATE TABLE TarjetaPagos (
    idTarjeta NUMBER PRIMARY KEY,
    idCliente NUMBER,
    notarjeta VARCHAR2(20),
    ccv VARCHAR2(10),
    saldo NUMBER,
    estado VARCHAR2(50),
    CONSTRAINT fk_cliente_tarjeta FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente)
);
