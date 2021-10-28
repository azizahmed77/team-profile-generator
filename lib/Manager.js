const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name,email,id,officeNumber) {
        super(name,email,id);
        officeNumber = this.officeNumber;
    }
};

Manager.prototype.getRole = function() {
    return "Manager";
};

module.exports = Manager;