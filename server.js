const inquirer = require("inquirer");
const mysql = require("mysql2");
// db = require(".");
require("console.table");

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1',
    database: 'employees_db',
});

db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log('Connected to MySQL server');
    init();
});

// try {
//     connection.connect();
//     console.log('Connected to MySQL server');
//   } catch (error) {
//     console.error('Error connecting to MySQL server:', error);
//   }

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("sucess " + connection.threadId)
//     init()
// })


//Your MySQL connection id is 12
function init() {
    console.log("Welcome to the Employee Tracker!");
    inquirer.prompt({
        //code block array view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
        name: "choices",
        type: "list",
        message: "Please select one of the following...",
        choices:
            [
                "View all departments",
                "View all roles",
                "View all Employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update Employee",
            ]
    }
    )
        .then(function (answer) {
            // console.log(answer);

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
                addDepartment(addDepartment);
            }
            else if (answer.choices === "Add a role") {
                getDepartmentChoices(addRole);
            }
            else if (answer.choices === "Add an employee") {
                addEmployee(addEmployee);
            }
            else if (answer.choices === "Update Employee") {
                updateEmployee(updateEmployee);
            }
        })
        .catch((err) => {
            console.log(err);
        }
        );

}

function allDepartments() {
    const sql = 'SELECT * FROM departments'
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.table(rows)
        init()
    });
};
// }; init();

function allRoles() {

    const sql = "SELECT * FROM roles";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.table(rows)
        init()
    });
};

function allEmployees() {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.table(rows)
        init()
    });
};

function addDepartment(departmentChoices) {
    inquirer.prompt(
        //question for each department_name
        [
            {
                type: "input",
                name: "department_name",
                message: "What is the name of the department?"
            }
        ]
    )
        .then((newDepartment) => {
            const sql = "INSERT INTO departments SET ?";
            db.query(sql, newDepartment, (err, rows) => {
                if (err) {
                    console.log(err)
                }
                console.table(rows)
                console.log('Department added successfully');
                init()
            }
            )
        })
};



function addRole(departmentChoices) {
    inquirer.prompt(
        //question for each job_id, salary, departments_id
        [
            {
                type: "input",
                name: "job_id",
                message: "What is the title of the role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of the role?"
            },
            {
                type: "list",
                name: "departments_id",
                message: "What is the department of the role?",
                choices: departmentChoices
            }
        ]
    )
        .then((newRole) => {
            // "INSERT INTO roles (job_id, salary, departments_id) VALUES (?, ?, ?)", [newRole.job_id, newRole.salary, newRole.departments_id]

            const sql = "INSERT INTO roles SET ?";
            db.query(sql, newRole, (err, rows) => {
                if (err) {
                    console.log(err)
                }
                console.log(`${newRole.job_id} added successfully`);
                init()
            });
        })
};
//from tutor session make sql match the javascript in the name to connect them 
function addEmployee(departmentChoices) {
    inquirer.prompt([
        // prompt for employee information
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        //     {
        //     type: "input",
        //     name: "job_id",
        //     message: "What is the employee's roleid?",
        //     // choices: departmentChoices
        //     },
        //     {
        //     type: "list",
        //     name: "manager_id",
        //     message: "Who is the employee's manager id?",
        //     // choices: departmentChoices
        // }
    ])
        .then((newEmployee) => {
            const sql = "INSERT INTO employees SET ?";
            db.query(sql, newEmployee, (err, results) => {
                if (err) {
                    console.error("Error adding employee:", err);
                    return;
                }
                console.log("Employee added successfully");
                init();
            });
        });
}
//from tutor session, make sql match the javascript in the name to connect them and use obj literals to make it easier for the user to read and make sure the changes were made in the application. the roleArray takes the roles and will make them appear as a list for user convenience and the the push will take each role and push it into the array the return the array so we see it. and then use the input from the user to update the role. use the correct update syntax.
function updateEmployee() {
    db.query('SELECT * FROM employees', (err, result) => {
        if (err) throw (err);
        inquirer.prompt([
            {
                name: "employee",
                type: "list",
                message: "Which employee would you like to update?",
                choices: function () {
                    const employeeArray = [];
                    result.forEach(({ first_name }) => {
                        employeeArray.push(first_name);
                    });
                    return employeeArray;
                }
            }
        ])
            .then(function (answer) {
                console.log(answer);
                const name = answer.employee;

                db.query("SELECT * FROM roles", function (err, res) {
                    inquirer.prompt([
                        {
                            name: "role",
                            type: "list",
                            message: "What is the new role?",
                            choices: function () {
                                var roleArray = [];
                                res.forEach(({ job_id }) => {
                                    roleArray.push(job_id);
                                });
                                return roleArray;
                            }
                        }
                    ]).then(function (roleInput) {
                        const role = roleInput.role;
                        console.log("Updating employee role...");
                        db.query('SELECT * FROM roles WHERE job_id = ?', [role], function (err, res) {
                            if (err) throw (err);
                            let roleId = res[0].id;
                            let query = "UPDATE employees SET role_id = ? WHERE first_name = ?";
                            let values = [parseInt(roleId), name]

                            db.query(query, values,
                                function (err, res, fields) {
                                    console.log(`Successfully updated ${name} role to ${role}.`);
                                    init();
                                })
                    })
                    // .then(function (roleInput) {
                    //     const role = roleInput.role;
                    //     console.log("Updating employee role...");
                    //     const sql = "UPDATE employees SET job_id = ? WHERE first_name = ?";
                    //     db.query(sql, [role, name], function (err, res) {
                    //         if (err) throw err;
                    //         console.log("Employee role updated");
                    //         init();
                    //     });
                    }
                    )
                })
            })
    }
    )
};



function getDepartmentChoices(cb) {//cb = callback function
    const sql = "SELECT id AS value, department_name AS name FROM departments";

    db.query(sql, (err, departments) => {
        if (err) {
            console.log(err)
        }

        cb(departments);
    })
}

