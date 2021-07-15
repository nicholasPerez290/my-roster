
const Engineer = require('../engineer');

describe('Engineer', () => {
    it('should return github username', () => {
        var name = ['bob', 'jack','wall'];
    var id = ['3','5','7'];
    var email = ['nicholas.perez290@gmail.com']
    var github = ['nicholasPerez290']
    const Eng = new Engineer(github,name,id,email)
    expect(Eng.getGithub(0)).toEqual('nicholasPerez290');
    })
    it('should return Engineer', () => {
        var name = ['bob', 'jack','wall'];
    var id = ['3','5','7'];
    var email = ['nicholas.perez290@gmail.com']
    var github = ['nicholasPerez290']
    const Eng = new Engineer(github,name,id,email)
    expect(Eng.getRole()).toEqual('Engineer');
    })
})