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

CREATE TABLE eventos (
    id SERIAL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    fecha DATE NOT NULL,
    lugar VARCHAR(50) NOT NULL
);

INSERT INTO
    eventos
values (
        DEFAULT,
        'Sube tu autoestima',
        'Vive la experiencia de subir uno de los cerros mas desafiantes de la ciudad con los mejores guias',
        '2022-11-27',
        'Jardin Rojo'
    ),
    (
        DEFAULT,
        'Ponle sabor a tu vaso de agua',
        'Aprende todas las combinaciones deliciosas que puedes hacer para disfrutar tu hidratacion',
        '2022-10-15',
        'Plaza Leones'
    ),
    (
        DEFAULT,
        'Pedalea tus pulmones',
        'Ven a disfrutar un paseo en bicicleta con todos tus vecinos',
        '2022-08-16',
        'Parque Japones'
    )

DROP TABLE usuarios;

CREATE TABLE usuarios (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL
);

DELETE FROM usuarios;

INSERT INTO
    usuarios
values (
        DEFAULT,
        'admin@vidasana.com',
        '123456'
    ),
    (
        DEFAULT,
        'manager@vidasana.com',
        'abcdefg'
    );

SELECT * FROM eventos;

SELECT * FROM usuarios;