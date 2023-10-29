# chal12-employee_tracker
## Demo
- Click [here](https://drive.google.com/file/d/1olwhp2lXGlnwusF6LyTkkd_fYg6TVKrJ/view) to view video demo on what this application does and how it was created (and how to use it).
# Overview
- The purpose of this challenge was to create a database and an application where a company can see their employees and view their department and roles as well. They should be able to view all employees, view the roles, and view the departments and if needed, they should be able to add a role or employee and update them as needed. This application should use node.js, JavaScript, and MySQL databaseto solidify previous activies and practices. 
## Challenges & Successes
- It was challenging connecting to the MySQL at first since I was using the incorrect way to connect to the databse. Once I realized where my error was it was pretty straightforward with using MySQL for this application. 
- It was challenging writing the code for Updating the Employee because it needed more logic than adding a role or adding an empoyee. I spent awhile reading the MySQL resource and it took more than a few tries until I found out that I should be using the array to get the information. 
- This challenge was a success because I learned a lot about MySQL and it works as intended. George and Dominique are tutors/TA's in this bootcamp and they helped a lot in making sure I understood the concepts and making sure that I understood not only how to structure the code but also to understand why we do it the way we do. 
## Technologies Used
- For this application, node.js, inquirer, MySQL, and JavaScript were used. The application runs using Node.js and the script is written using JavaScript. Inquirer is used as an easier way to use the prompt method to make the application run smoother. MySQL is the database used in this application to store the employees, the roles, and the departments. 
## Installation 
- After doing the git clone, download node using npm i and then type in server.js to get application started. 
## Credits
- Dominique Meeks Gombe tutor at University of Denver BootCamp (specifically helped with mysql syntax and making the addEmployee, addRole, and UpdateEmployee functions to add missing information.) We had our tutor session on Saturday, October 28th. I want to give a huge shoutout to her as she really helped with the functions that were a bit harder (updating the employee and add role) where I was using a different way to use the MySQL Syntax. I was using different names on the inquirer prompts and she showed me and made sure I understood that I could do that but an easier method was to use the same name in the prompt as the schema that way I don't have to match up those different names to connect to the database. 
- George Yoo TA at University of Denver BootCamp (specifically helped with the structure and pseudo coding of this assignment. George helped a lot with explaining the concepts and letting us know what we need to do and going in depth answering my questions on how we do specific things).
- “Javascript parseInt().” JavaScript parseInt() Method, www.w3schools.com/jsref/jsref_parseint.asp. Accessed 28 Oct. 2023. 
- JohnJohn1, and LeighLeigh. “Dealing with Mysql NATIVEERROR Code 1366 and Sqlstate HY000 in Coldfusion.” Stack Overflow, stackoverflow.com/questions/26788570/dealing-with-mysql-nativeerror-code-1366-and-sqlstate-hy000-in-coldfusion. Accessed 26 Oct. 2023. 
- MozDevNet. “Parseint() - Javascript: MDN.” JavaScript | MDN, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt. Accessed 29 Oct. 2023. 
- “MYSQL2.” Npm, www.npmjs.com/package/mysql2. Accessed 20 Oct. 2023. 
- University of Denver BootCamp Modules and practices
