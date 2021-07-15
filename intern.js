const Employee = require('./employee')

class Intern extends Employee {
    constructor(school, name, id, email){
        super (name, id, email)
        this.school = school;
    }
    getSchool(num){
        return this.school[num];
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern