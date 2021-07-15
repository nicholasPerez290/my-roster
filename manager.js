const Employee = require('./employee')
class Manager extends Employee {
    constructor(officeNumber, name, id, email){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNum(num) {
        return this.officeNumber[num];
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;