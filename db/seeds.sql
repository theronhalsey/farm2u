USE farm2u_db;

INSERT INTO farm (farmName, farmZip) VALUES ('Sunny Brook', 19118);
INSERT INTO farm (farmName, farmZip) VALUES ('brookfieled', 19228);

INSERT INTO product (productName, productAvailable, productDescription) VALUES ('eggs', 1, "fresh eggs");
INSERT INTO product (productName, productAvailable, productDescription) VALUES ('chicken', 1, "fresh chicken");
INSERT INTO product (productName, productAvailable, productDescription) VALUES ('beef', 1, "fresh beef");

INSERT INTO productType (productType) VALUES ('Poultry');
INSERT INTO productType (productType) VALUES ('Dairy');
INSERT INTO productType (productType) VALUES ('Beef');

