DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS dog;
DROP TABLE IF EXISTS overwatch;
DROP TABLE IF EXISTS shoes;
DROP TABLE IF EXISTS cat;

CREATE TABLE people (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR
);

CREATE TABLE dog (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    breed VARCHAR
);

CREATE TABLE overwatch (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    role VARCHAR
);

CREATE TABLE shoes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    brand VARCHAR
);

CREATE TABLE cat (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    breed VARCHAR
);


INSERT INTO people (
    first_name,
    last_name
)
VALUES
('Udale', 'Baggelley'),
('Lorilee', 'Whittam'),
('Jasun', 'Yerson'),
('Bridget', 'Bettesworth'),
('Beth', 'Billany')
;

INSERT INTO dog (
    name,
    breed
)
VALUES
('Hendricus', 'Golden'),
('Freyr', 'German'),
('Heimir', 'Poodle'),
('Helios', 'Bulldog'),
('Berna', 'Husky')
;

INSERT INTO overwatch (
    name,
    role
)
VALUES
('Mercy', 'Healer'),
('DoomFist', 'Tank'),
('Mcree', 'Dps'),
('Tracer', 'Dps'),
('Roadhog', 'Tank')
;

INSERT INTO shoes (
    name,
    brand
)
VALUES
('nike', 'dunk'),
('yeezy', 'slides'),
('adidas', 'SwiftRun'),
('yeezy', 'zebra'),
('classic', 'vans')
;


INSERT INTO cat (
    name,
    breed
)
VALUES
('Udo', 'Siamese'),
('Evelina', 'Persian'),
('Chen', 'Ragdoll'),
('Vilhelmi', 'Sphynx'),
('Laurentino', 'Birman')
;

