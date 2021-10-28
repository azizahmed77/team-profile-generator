const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/Engineer')

test('instantiates new Engineer object', () => {
    const engineer1 = new Engineer('Aziz',"ahmed613@umn.edu", 88)
    
    expect(engineer1.name).toBe('Aziz');
    expect(engineer1.email).toBe('ahmed613@umn.edu');
    expect(engineer1.id).toBe(88);

    console.log(engineer1);
})

test('can get name, id,email, and role', () => {
    
    const name = 'Aziz';
    const email = 'ahmed613@umn.edu';
    const id = 88;
    const engineer1 = new Engineer(name,email,id);
    

    expect(engineer1.getName()).toBe(name);
    expect(engineer1.getEmail()).toBe(email);
    expect(engineer1.getId()).toBe(id);
    expect(engineer1.getRole()).toBe('Engineer');

    console.log(engineer1);
})