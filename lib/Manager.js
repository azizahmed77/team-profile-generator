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

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;