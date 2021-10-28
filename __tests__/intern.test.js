const { TestWatcher } = require('@jest/core');
const Intern = require('../lib/Intern');

test('instantiates new Intern object', () => {
    const intern1 = new Intern ('Aziz',"ahmed613@umn.edu",99 )
    
    expect(intern1.name).toBe('Aziz');
    expect(intern1.email).toBe('ahmed613@umn.edu');
    expect(intern1.id).toBe(99);

    console.log(intern1);
})

test('can get name, id,email, and role', () => {
    const name = 'Aziz';
    const email = 'ahmed613@umn.edu';
    const id = 99
    const intern1 = new Intern(name,email,id);

    expect(intern1.getName()).toBe(name);
    expect(intern1.getEmail()).toBe(email);
    expect(intern1.getId()).toBe(id);
    expect(intern1.getRole()).toBe('Intern');

    console.log(intern1);
})