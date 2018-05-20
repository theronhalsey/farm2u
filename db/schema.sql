DROP DATABASE farm2u_db;


CREATE DATABASE farm2u_db;
USE farm2u_db;

CREATE TABLE farm
(
	farmId int NOT NULL AUTO_INCREMENT,
	farmName VARCHAR (255) NOT NULL,
    farmZip INT (10) NOT NULL,
	PRIMARY KEY (farmId)
);

select * from farm;


CREATE TABLE product
(
	productId int NOT NULL AUTO_INCREMENT,
	productName VARCHAR (255) NOT NULL,
    productAvailable BOOLEAN NOT NULL DEFAULT 1,
    productDescription TEXT,
    farmID int,
    typeID int,
	PRIMARY KEY (productId)
);

select * from product;


CREATE TABLE productType
(
	typeId int NOT NULL AUTO_INCREMENT,
	productType VARCHAR (255) NOT NULL,
	PRIMARY KEY (typeId)
);