
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creates a new Employee object', () => {
    const employee1 = new Employee('Aziz', 'ahmed613@umn.edu', 33);

    expect(employee1.name).toBe('Aziz');
    expect(employee1.email).toBe('ahmed613@umn.edu');
    expect(employee1.id).toBe(33);

    console.log(employee1.name);
}); 

