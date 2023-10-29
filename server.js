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

db.connect(function(err) {
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
    .then(function(answer) {
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
            addEmployee();
        }
        else if (answer.choices === "Update Employee") {
            updateEmployee();
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

function allEmployees(){
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
     init()}
 )})};

    

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

function addEmployee() {
  inquirer.prompt([
    // prompt for employee information
  ]).then((newEmployee) => {
    const sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    const values = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error adding employee:", err);
        return;
      }
      console.log("Employee added successfully");
      init();
    });
  });
}

function updateEmployee() {
    const sql = "UPDATE employees";
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
        }
        console.table(rows)
        init()
    });
}; 

function getDepartmentChoices(cb){//cb = callback function
    const sql = "SELECT id AS value, department_name AS name FROM departments";
    
    db.query(sql, (err, departments) => {
        if (err) {
            console.log(err)
        }

        cb(departments);
    })
}

// process.stdin.setMaxListeners(20);

////explain inquire choice with objects
// inquirer.prompt([
//     {
//         type: "list",
//         name: "choices",
//         message: "Please select one of the following...",
//         choices: [
//             {
//                 name: "View all departments",
//                 value: 1
//             },
//             {
//                 name: "View all roles",
//                 value: 2
//             },
//             {
//                 name: "View all Employees",
//                 value: 3
//             }
//         ]
//     }
// ]).then((answers)=>{
//     console.log("hello")
// })