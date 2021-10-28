/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/






const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const { finished } = require('stream');


let teamArray = [];



const initiatePrompts = async () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Who is the manager of your workplace?',
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log('Please enter a name for the manager');
                        return false;
                    }
                },

            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Please enter Manager`s ID number',
                validate: managerId => {
                    if (managerId) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID number');
                        return false;
                    }
                },


            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Manager`s email address',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    }
                },


            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter Manager`s office number',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter a valid number');
                        return false;
                    }
                }

            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.email, answers.managerId,answers.officeNumber)
            teamArray.push(manager);
            console.log(teamArray);
        })
        .then(employeePrompt)
        
}

const employeePrompt = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add other employees?',
                default:true
            },
            {
                type: 'list',
                name: 'employeeType',
                message: "Please choose between the two options",
                choices: ['Engineer', 'Intern']
            }
        ])
        .then((response) => {
            if(response.employeePrompt === 'Intern') {
                internPrompt();
            }
            else if(response.employeePrompt === 'Engineer') {
                engineerPrompt();
            } else {
                finished();
            }
        })
}

initiatePrompts()








// initialprompt/manager questions
//push new manager object to team array
// then ask if they want to add another employee(confirm) or are done
//then ask what tye of employee(list)
//then ask relevant questions
//push new intern/engineer object to team array
//then check if they want to add another or if they are done, repeat others
// when done, push to array
//generate html