-- 1.Inserted row for chair --
INSERT INTO products (name, price, can_be_returned)
VALUES ('Chair', 44.00, false);
-- 2.Inserted row for stool --
INSERT INTO products (name, price, can_be_returned)
VALUES ('Stool', 25.99, true);
-- 3.Inserted row for table --
INSERT INTO products (name, price, can_be_returned)
VALUES ('Table', 124.00, false);

-- 4.Display all rows and columns in table--
SELECT * FROM products;
-- 5.Display all names from table--
SELECT name FROM products;
-- 6.Display all names, prices from table--
SELECT name,price FROM products;

-- 7.Insert row for cutting board --
INSERT INTO products (name, price, can_be_returned)
VALUES ('Cutting Board', 55.00, false);

-- 8.Display on products that can be returned --
SELECT * FROM products
WHERE can_be_returned = 'true';
-- 9.Display only products that have price less than 44.00 --
SELECT * FROM products
WHERE price < 44.00;
-- 10. Display only products that have a price in between 22.50 and 99.99 --
SELECT * FROM products
WHERE price > 22.50 AND price < 99.99;

-- 11.There’s a sale: Everything is $20 off! Update the database accordingly --
UPDATE products 
SET price = price * .80;

-- 12. Because of the sale, everything that costs less than $25 has sold out --
DELETE FROM products
WHERE price < 25;

-- 13. Sale is over. For the remaining products, increase their price by $20 --
UPDATE products
SET price = price + 20;

-- 14.There is a new company policy: everything is returnable. Update the database accordingly --
UPDATE products
SET can_be_returned = 'true';
