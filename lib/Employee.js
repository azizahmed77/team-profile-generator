// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

class Employee {
    constructor(name,email,id) {
        this.name = name;
        this.email = email;
        this.id = id;

    }
}

Employee.prototype.getName = function() {
    return this.name;

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