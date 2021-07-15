const Employee = require('./employee');

class Engineer extends Employee {
    constructor(git, name, id, email){
        super(name, id, email);
        this.git = git
    }
    getGithub(num) {
        return this.git[num];
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer