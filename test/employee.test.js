const Employee = require("../employee");

describe('Employee', () => {
    it('should return bob when called', () => {
    var name = ['bob', 'jack','wall'];
    var id = ['3','5','7'];
    var email = 'nicholas.perez290@gmail.com'
    const Emp = new Employee(name,id,email)
    expect(Emp.getName(2)).toEqual('wall');
    });

    it('Should return 3 when getId() is called', () => {
            var name = ['bob', 'jack','wall'];
            var id = ['3','5','7'];
            var email = 'nicholas.perez290@gmail.com'
            const Emp = new Employee(name,id,email)
            expect(Emp.getId(2)).toEqual('7');
    });
    it('should return nicholas.perez290@gmail.com when called', () => {
        var name = ['bob', 'jack','wall'];
        var id = ['3','5','7'];
        var email = ['nicholas.perez290@gmail.com','what@whp.com','block@square.com']
        const Emp = new Employee(name,id,email)
        expect(Emp.getEmail(0)).toEqual(email[0]);
        });
    
        it('Should return Employee when getRole() is called', () => {
                var name = ['bob', 'jack','wall'];
                var id = ['3','5','7'];
                var email = 'nicholas.perez290@gmail.com'
                const Emp = new Employee(name,id,email)
                expect(Emp.getRole()).toEqual('Employee');
        });
})