

class Employee {
    constructor(employeeName,email,id) {
        this.employeeName = employeeName;
        this.email = email;
        this.id = id;

    }
}

Employee.prototype.getName = function() {
    return this.employeeName;

}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getRole = function() {
    return "Employee";
}

module.exports = Employee;