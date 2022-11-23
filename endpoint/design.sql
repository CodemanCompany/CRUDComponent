--  ██████╗ ██████╗ ██████╗ ███████╗███╗   ███╗ █████╗ ███╗   ██╗
-- ██╔════╝██╔═══██╗██╔══██╗██╔════╝████╗ ████║██╔══██╗████╗  ██║
-- ██║     ██║   ██║██║  ██║█████╗  ██╔████╔██║███████║██╔██╗ ██║
-- ██║     ██║   ██║██║  ██║██╔══╝  ██║╚██╔╝██║██╔══██║██║╚██╗██║
-- ╚██████╗╚██████╔╝██████╔╝███████╗██║ ╚═╝ ██║██║  ██║██║ ╚████║
--  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
-- @version 1.0.0

DROP SCHEMA IF EXISTS datatables;

CREATE SCHEMA datatables;

USE datatables;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR( 40 ) NOT NULL,
	last_name VARCHAR( 50 ) NOT NULL,
	maternal_surname VARCHAR( 50 ) NOT NULL,
	email VARCHAR( 60 ) NOT NULL,
	gender ENUM( "F", "M", "O" ) NOT NULL,
	created_at DATETIME NOT NULL,
	updated_at DATETIME NOT NULL,
	deleted_at DATETIME,

	UNIQUE( email ),

	PRIMARY KEY( id )
)
ENGINE = INNODB
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO users
VALUES
( DEFAULT, "Gustavo", "Martinez", "Miranda", "1@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "2@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "3@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "4@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "5@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "6@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "7@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "8@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "9@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "10@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "11@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "12@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "13@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "14@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "15@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "16@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "17@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "18@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "19@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Gustavo", "Martinez", "Miranda", "gustavo@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Mateo", "Martinez", "Bernal", "mateo.reload962@gmail.com", "M", NOW(), NOW(), NULL );