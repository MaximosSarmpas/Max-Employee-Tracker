const connection = require("./connection.js");

class employeeDB {

    constructor(connection) {
        this.connection = connection;
    }

    // view all employees
    allEmployees(){
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;" 
        );
    }

    //add an employee
    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    //update the employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    }

    //show all managers
    allManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );
    }

    //show all roles
    allRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    //add a role
    addRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }

    //show all departments
    allDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department;"
        );
    }

    //add a department 
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
}

module.exports = new employeeDB(connection);