
const { it, expect } = require('@jest/globals');
const { blackBright } = require('chalk');
const { getMaxListeners } = require('process');
const Manager = require('../manager');

describe('Manager', () => {
    it('should return the given office number when called', () => {
        var officeNumber = [35, 17, 14];
        var name = 'bob'
        var id = 7
        var email = 'nicholas.perez290@blackBright.com'
        const mang = new Manager(officeNumber, name, id, email);
        expect(mang.getOfficeNum(0)).toEqual(35);
    })
    it('should return manager when called', () => {
        const mang = new Manager()
        expect(mang.getRole()).toEqual('Manager')
    })
    it('should return name of manager', () => {
        var officeNumber = [35, 17, 14];
        var name = ['bob']
        var id = [7]
        var email = 'nicholas.perez290@blackBright.com'
        const mang = new Manager(officeNumber, name, id, email);
        expect(mang.getName(0)).toEqual('bob')
    })
})