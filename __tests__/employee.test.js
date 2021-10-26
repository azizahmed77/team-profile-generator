
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creates a new Employee object', () => {
    const employee1 = new Employee('Aziz', 'ahmed613@umn.edu', 33);

    expect(employee1.name).toBe('Aziz');
    expect(employee1.email).toBe('ahmed613@umn.edu');
    expect(employee1.id).toBe(33);

    console.log(employee1.name);
}); 

test('can get name, id,email, and role', () => {
    const name = 'Aziz';
    const email = 'ahmed613@umn.edu';
    const id = 33
    const employee1 = new Employee(name,email,id);

    expect(employee1.getName()).toBe(name);
    expect(employee1.getEmail()).toBe(email);
    expect(employee1.getId()).toBe(id);
    expect(employee1.getRole()).toBe('Employee');

    console.log(employee1);
})



