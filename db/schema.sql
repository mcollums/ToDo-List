DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todo_table 
(
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(300) NOT NULL,
    done BOOLEAN DEFAULT false,
    todo_status VARCHAR(10) DEFAULT "notStarted",
    PRIMARY KEY (id)
);