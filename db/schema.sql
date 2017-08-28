/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database hotdogs_db and specified it for use.
DROP DATABASE IF EXISTS hotdogs_db;
CREATE DATABASE hotdogs_db;
USE hotdogs_db;

-- Create the table hotdogs.
CREATE TABLE hotdogs
(
    id int NOT NULL AUTO_INCREMENT,
    hotdog_name varchar(255) NOT NULL,
    devoured BIT DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);