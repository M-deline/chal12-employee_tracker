USE employees_db;
INSERT INTO departments(department_name)

VALUES
("web designer"),
("marketing"),
("technical writer"),
("human resources");

INSERT INTO roles (job_id, departments_id, salary)
VALUES ("Lead Web Designer", 1, 85000),
("Marketing Specialist", 2, 80000),
("Technical Writer", 3, 75000),
("Support", 4, 35000);

INSERT INTO employees (first_name, last_name, job_id, manager_id)
VALUES ("Kelly", "Freeman", 1, NULL),
("Joshua", "Petrov", 2, 1),
("Arthur ", "Jones", 3, 1),
("Sergio", "Castillo", 3, 1),
("Eraclio", "Reyes", 4, 1);

