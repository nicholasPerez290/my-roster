
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(num) {
        return this.name[num];
    };
    getId(num) {
        return this.id[num];
    };
    getEmail(num) {
        return this.email[num];
    };
    getRole() {
        return 'Employee';
    }
    getLength() {
        return this.name.length;
    }
};
module.exports = Employee;