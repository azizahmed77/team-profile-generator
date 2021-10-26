const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (gitHub,name,id,email,) {
        super(name,email,id);
        gitHub = this.gitHub;
    }
}

Engineer.prototype.getRole = function() {
    return "Engineer";
};

module.exports = Engineer;