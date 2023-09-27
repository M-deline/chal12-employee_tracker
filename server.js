const inquirer = require("inquirer");
const mysql = require("mysql");
const db = require(".");
require("console.table");


const PORT = process.env.PORT || 3001;


function allDepartments() {
    const sql = 'SELECT * FROM departments'
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function allRoles() {
    const sql = "SELECT * FROM roles";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function allEmployees(){
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function addDepartment() {
    const sql = "INSERT INTO department";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function addRole() {
    const sql = "INSERT INTO roles";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function addEmployee () {
    const sql = "INSERT INTO employees";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function updateEmployee() {
    const sql = "UPDATE employees";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.log(rows)
    });
    init()
}; init();

function init() {
    inquirer
        .prompts({
            //code block array view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
            name: "choices",
            type: "list",
            message: "Please select one of the following...",
            options:
                [
                    "View all departments",
                    "View all roles",
                    "View all Employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update Employee",
                ]
        })
        .then(function(answer) {
            console.log(answer);

            if (answer.choices === "View all departments") {
                allDepartments();
            }
            else if (answer.choices === "View all roles") {
                allRoles();
            }
            else if (answer.choices === "View all Employees") {
                allEmployees();
            }
            else if (answer.choices === "Add a department") {
                addDepartment();
            }
            else if (answer.choices === "Add a role") {
                addRole();
            }
            else if (answer.choices === "Add an employee") {
                addEmployee();
            }
            else if (answer.choices === "Update Employee") {
                updateEmployee();
            }
        })
}

