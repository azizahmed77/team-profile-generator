const Employee = require('./Employee');

class Manager extends Employee {
    constructor (employeeName,email,id,officeNumber) {
        super(employeeName,email,id);
        officeNumber = this.officeNumber;
    }
};

Manager.prototype.getRole = function() {
    return "Manager";
};


module.exports = Manager;