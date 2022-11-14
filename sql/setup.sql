DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS dog;

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