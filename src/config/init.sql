-- Active: 1731027127296@@127.0.0.1@5432@plan_de_viajes
CREATE TABLE viajes (
    id SERIAL,
    destino VARCHAR(50) NOT NULL,
    presupuesto INT NOT NULL
);

INSERT INTO
    viajes
VALUES (DEFAULT, 'Chile', '300000'),
    (DEFAULT, 'Colombia', '500000'),
    (DEFAULT, 'Panama', '1000000'),
    (DEFAULT, 'Peru', '100000');

SELECT * FROM viajes;