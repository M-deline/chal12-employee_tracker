DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(35) NOT NULL UNIQUE,
)

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_id VARCHAR(35) NOT NULL UNIQUE,
    salary INT NOT NULL, 
    departments_id INT NOT NULL,
    FOREIGN KEY (departments_id)
    REFERENCES departments(id)
) 

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(35) NOT NULL, 
    last_name VARCHAR(35) NOT NULL, 
    job_id NOT NULL,
     manager_id INT,
    FOREIGN KEY(job_id)
    REFERENCES roles(id),
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
)