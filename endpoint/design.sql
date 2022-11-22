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
( DEFAULT, "Gustavo", "Martinez", "Miranda", "gustavo@codeman.company", "M", NOW(), NOW(), NULL ),
( DEFAULT, "Mateo", "Martinez", "Bernal", "mateo.reload962@gmail.com", "M", NOW(), NOW(), NULL );