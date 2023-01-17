CREATE DATABASE typescript;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    email VARCHAR(250)
);

INSERT INTO users (name,email) 
VALUES ('sebastian', 'sebastian@gmail.com'); 