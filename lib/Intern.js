const Employee = require('./Employee');

class Intern extends Employee {
    constructor (school,name,id,email,) {
        super(name,email,id);
        school = this.school;
    }
};

Intern.prototype.getRole = function() {
    return "Intern";
};

module.exports = Intern;