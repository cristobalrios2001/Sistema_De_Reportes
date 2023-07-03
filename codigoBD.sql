CREATE TABLE flota(
	nombre_flota varchar(20),
	PRIMARY KEY(nombre_flota)
);

CREATE TABLE camion(
	flota varchar(20),
	id_camion varchar(10),
	PRIMARY KEY(flota, id_camion),
	FOREIGN KEY(flota) REFERENCES flota(nombre_flota)
);

CREATE TABLE rajo(
	nombre_rajo varchar(20),
	PRIMARY KEY(nombre_rajo)
);

CREATE TABLE fase(
	rajo varchar(20),
	id_fase varchar(10),
	estado boolean,
	PRIMARY KEY(rajo, id_fase),
	FOREIGN KEY(rajo) REFERENCES rajo(nombre_rajo)
);

CREATE TABLE extraccion(
	id_extraccion serial,
	fecha date,
	flota varchar(20),
	camion varchar(10),
	material varchar(20),
	origen varchar(20),
	destino varchar(20),
	tonelaje float,
	ciclos integer,
	rajo varchar(20),
	fase varchar(10),
	PRIMARY KEY(id_extraccion),
	FOREIGN KEY(flota, camion) REFERENCES camion(flota, id_camion),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase)
);

CREATE TABLE factor_carga(
	id_factor serial,
	fecha_inicio date,
	fecha_termino date,
	rajo varchar(20),
	fase varchar(10),
	flota varchar(20),
	PRIMARY KEY(id_factor),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase),
	FOREIGN KEY(flota) REFERENCES flota(nombre_flota)
);

CREATE TABLE reporte_diario(
	fecha date,
	rajo varchar(20),
	fase varchar(10),
	extraccion_mineral float,
	extraccion_lastre float,
	total_extraccion float,
	remanejo float,
	movimiento_total float,
	chancado float,
	PRIMARY KEY(fecha),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase)
);

CREATE TABLE datos_plan(
	id_datos serial,
	fecha date,
	extraccion_mineral float,
	extraccion_oxidos_mixtos float,
	extraccion_lastre float,
	total_extraccion float,
	remanejo float,
	movimiento_total float,
	chancado float,
	PRIMARY KEY(id_datos),
	FOREIGN KEY(fecha) REFERENCES reporte_diario(fecha)
);

CREATE TABLE movimiento_fases(
	id_movimientos serial,
	plan integer,
	rajo varchar(20),
	fase varchar(10),
	PRIMARY KEY(id_movimientos),
	FOREIGN KEY(plan) REFERENCES datos_plan(id_datos),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase)
);