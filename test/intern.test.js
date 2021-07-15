
const Intern = require('../intern')

describe('intern', () => {
    it('should return the school at that index', () => {
        var school = ['wimbledorf']
        var name = ['bob']
        var id = [7]
        var email = ['nicholas.perez290@blackBright.com']
        const Int = new Intern(school, name, id, email);
        expect(Int.getSchool(0)).toEqual('wimbledorf');
    })
    it('should return Intern', () => {
        var school = ['wimbledorf']
        var name = ['bob']
        var id = 7
        var email = 'nicholas.perez290@blackBright.com'
        const Int = new Intern(school, name, id, email);
        expect(Int.getRole()).toEqual('Intern');
    })
})