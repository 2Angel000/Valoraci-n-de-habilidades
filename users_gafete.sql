create database gafetedb;
use gafetedb;
show databases;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    number VARCHAR(10),
    email VARCHAR(50) UNIQUE,
    PRIMARY KEY (id)
);

desc users;
select*from users;
show tables;