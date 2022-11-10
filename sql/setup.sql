DROP TABLE IF EXISTS people;

CREATE TABLE people (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR
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