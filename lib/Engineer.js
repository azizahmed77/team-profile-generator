const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name,email,id,gitHub) {
        super(name,email,id);
        gitHub = this.gitHub;
    }
}

Engineer.prototype.getRole = function() {
    return "Engineer";
};

Engineer.prototype.getGitHub = function() {
    return this.gitHub;
};

module.exports = Engineer;