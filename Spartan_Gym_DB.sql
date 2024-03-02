--Postulante: Miguel Angel Florencio Martinez
CREATE DATABASE spartaDB;

use spartaDB;

CREATE TABLE member (
    id BIGINT PRIMARY KEY,
    name NVARCHAR(25),
    last_name NVARCHAR(25),
    email NVARCHAR(50),
    created_at DATETIME,
    updated_at DATETIME
);

CREATE TABLE access_log (
    id BIGINT PRIMARY KEY,
    member_id BIGINT,
    CONSTRAINT fk_member_id FOREIGN KEY (member_id) REFERENCES member(id),
    timestamp DATETIME,
    comment TEXT
);

INSERT INTO member (id, name, last_name, email, created_at, updated_at) 
VALUES (1, 'Juan', 'Pérez', 'juan@example.com', GETDATE(), GETDATE());

INSERT INTO member (id, name, last_name, email, created_at, updated_at) 
VALUES (2, 'Eduardo', 'Lopez', 'eduardo@example.com', GETDATE(), GETDATE());

INSERT INTO member (id, name, last_name, email, created_at, updated_at) 
VALUES (3, 'Matias', 'Hernandez', 'MatiHdz@example.com',  GETDATE(), GETDATE());

-- Creando 1 visita de Juan al gimnasio ayer y otra hoy
INSERT INTO access_log (id, member_id, timestamp, comment) 
VALUES (3, 1, DATEADD(DAY, -1, GETDATE()), 'Visita al gimnasio ayer');

INSERT INTO access_log (id, member_id, timestamp, comment) 
VALUES (4, 1, GETDATE(), 'Visita al gimnasio hoy');

-- Creando 1 visita de Eduardo al gimnasio hace 8 días y otra hace 9 días
INSERT INTO access_log (id, member_id, timestamp, comment) 
VALUES (5, 2, DATEADD(DAY, -8, GETDATE()), 'Visita al gimnasio hace 8 días');

INSERT INTO access_log (id, member_id, timestamp, comment) 
VALUES (6, 2, DATEADD(DAY, -9, GETDATE()), 'Visita al gimnasio hace 9 días');

-- Creando 1 visita de Matías al gimnasio hace mes y medio
INSERT INTO access_log (id, member_id, timestamp, comment) 
VALUES (7, 3, DATEADD(DAY, -45, GETDATE()), 'Visita al gimnasio hace mes y medio');



select * from member;
select * from access_log;


SELECT * FROM dbo.member AS m -- Selecciona todos los datos de la tabla "member" y le asigna el alias "m"
WHERE EXISTS( -- Condición: verifica si no existe alguna fila que cumpla ciertas condiciones
    SELECT * FROM dbo.access_log AS access -- Subconsulta: selecciona todos los datos de la tabla "access_log" y le asigna el alias "access"
    WHERE access.member_id = m.id -- Condición de correlación: compara el "member_id" de la tabla "access_log" con el "id" de la tabla "member"
    AND access.timestamp >= DATEADD(MONTH, -2, GETDATE()) -- Verifica si la marca de tiempo está dentro de los últimos 2 meses
    AND access.timestamp <= DATEADD(DAY, -7, GETDATE()) -- Verifica si la marca de tiempo está dentro de los últimos 7 días
);



SELECT name FROM sys.databases;
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';
drop table member;
drop table access_log;

delete from access_log where member_id = '3';