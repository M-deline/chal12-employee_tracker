const inquirer = require("inquirer");
const mysql = require("mysql");
const db = require(".");
require("console.table");


const PORT = process.env.PORT || 3001;


function allDepartments() {
    const sql = 'SELECT * FROM'
}