USE farm2u_db;

INSERT INTO farm (farmName, farmZip) VALUES ('Sunny Brook', 19118);
INSERT INTO farm (farmName, farmZip) VALUES ('Brookfieled', 19228);

INSERT INTO product (productName, productAvailable, productDescription, farmID, typeID) VALUES ('eggs', 1, "fresh eggs", 1, 2);
INSERT INTO product (productName, productAvailable, productDescription, farmID, typeID) VALUES ('chicken', 1, "fresh chicken", 2, 1);
INSERT INTO product (productName, productAvailable, productDescription, farmID, typeID) VALUES ('beef', 1, "fresh beef", 1, 3);

INSERT INTO productType (productType) VALUES ('Poultry');
INSERT INTO productType (productType) VALUES ('Dairy');
INSERT INTO productType (productType) VALUES ('Beef');