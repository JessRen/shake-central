CREATE DATABASE IF NOT EXISTS shake_db;
USE shake_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS shakes;

# Create the burgers table
CREATE TABLE shakes (
id integer NOT NULL AUTO_INCREMENT,
shake_name varchar(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
Primary Key(id)
);
