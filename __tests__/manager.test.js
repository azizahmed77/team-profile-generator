const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager');

test('instantiates new Manager object', () => {
    const manager1 = new Manager('Aziz',"ahmed613@umn.edu", 77)
    
    expect(manager1.name).toBe('Aziz');
    expect(manager1.email).toBe('ahmed613@umn.edu');
    expect(manager1.id).toBe(77);

    console.log(manager1);
})

test('can get name, id,email, and role', () => {
    const name = 'Aziz';
    const email = 'ahmed613@umn.edu';
    const id = 77
    const manager1 = new Manager(name,email,id);

    expect(manager1.getName()).toBe(name);
    expect(manager1.getEmail()).toBe(email);
    expect(manager1.getId()).toBe(id);
    expect(manager1.getRole()).toBe('Manager');

    console.log(manager1);
})