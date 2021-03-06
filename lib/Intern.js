const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name,email,id,school) {
        super(name,email,id);
        school = this.school;
    }
};

Intern.prototype.getRole = function() {
    return "Intern";
};

Intern.prototype.getSchool = function() {
    return this.school;
};

module.exports = Intern;