-- Active: 1731027127296@@127.0.0.1@5432@plan_de_viajes

CREATE TABLE viajes (
    id SERIAL,
    destino VARCHAR(50) NOT NULL,
    presupuesto INT NOT NULL
);