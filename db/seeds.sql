INSERT INTO Farmers (farmName, farmZip) VALUES ('Sunny Brook', 19118);
INSERT INTO Farmers (farmName, farmZip) VALUES ('Brookfieled', 19228);

INSERT INTO ProductTypes (productTypeName) VALUES ('Poultry');
INSERT INTO ProductTypes (productTypeName) VALUES ('Dairy');
INSERT INTO ProductTypes (productTypeName) VALUES ('Beef');

INSERT INTO Products (productName, productAvailable, productDescription, farmID, typeID) VALUES ('eggs', 1, "fresh eggs", 1, 1);
INSERT INTO Products (productName, productAvailable, productDescription, farmID, typeID) VALUES ('chicken', 1, "fresh chicken", 1, 1);
INSERT INTO Products (productName, productAvailable, productDescription, farmID, typeID) VALUES ('beef', 1, "fresh beef", 1, 1);