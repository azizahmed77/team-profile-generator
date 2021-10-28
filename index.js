/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team employees and their information
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


// initialprompt/manager questions
//push new manager object to team array
// then ask if they want to add another employee(confirm) or are done
//then ask what tye of employee(list)
//then ask relevant questions
//push new intern/engineer object to team array
//then check if they want to add another or if they are done, repeat others
// when done, push to array
//generate html






const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');


const teamArray = [];



const initiatePrompts = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Who is the manager of your workplace?',
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter a name for the manager');
                        return false;
                    }
                },

            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter Manager`s ID number',
                validate: id => {
                    if (id) {
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
        .then(({name,id,email,officeNumber}) => {
            let manager = new Manager(name,id,email,officeNumber);
            teamArray.push(manager)
            console.log(teamArray);
            htmlBody();
            addEmployeeHTML(manager);
            employeePrompt()
        })
        
        
        
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
                choices: ['Engineer', 'Intern'],
                when: ({addEmployee}) => addEmployee
            }
        ])
        .then(answers => {
            if(answers.employeeType === 'Intern') {
                console.log('int')
                internPrompt()
            } else if(answers.employeeType === 'Engineer') {
                console.log('eng')
                engineerPrompt()
            } else {
                footer();
                console.log(teamArray);
            } 
            })
}

const internPrompt = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name:'name',
                message: 'Please enter intern`s name',
                validate: name => {
                    if(name) {
                        return true;
                    } else {
                        console.log('Please enter a name')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'email',
                message: 'Please enter an email adress',
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log('Please enter an email address')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'id',
                message: 'Please enter an Id number',
                validate: id => {
                    if(id) {
                        return true;
                    } else {
                        console.log('Please enter an ID number')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'school',
                message: 'Please enter name of school that intern attends',
                validate: school => {
                    if(school) {
                        return true;
                    } else {
                        console.log('Please enter a school')
                        return false;
                    }
                }

            }

        ])
        .then(({name,id,email,school}) => {
            let intern = new Intern(name,id,email,school);
            teamArray.push(intern)
            console.log(teamArray);
            addEmployeeHTML(intern);
            employeePrompt();
        })
        
}


const engineerPrompt = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name:'name',
                message: 'Please enter engineer`s name',
                validate: name => {
                    if(name) {
                        return true;
                    } else {
                        console.log('Please enter a name')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'email',
                message: 'Please enter an email address',
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log('Please enter an email address')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'id',
                message: 'Please enter an Id number',
                validate: id => {
                    if(id) {
                        return true;
                    } else {
                        console.log('Please enter an ID number')
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name:'github',
                message: 'Please enter name of github account',
                validate: github => {
                    if(github) {
                        return true;
                    } else {
                        console.log('Please enter a name')
                        return false;
                    }
                }

            }

        ])
        .then(({name,id,email,github}) => {
            let engineer = new Engineer(name,id,email,github);
            teamArray.push(engineer)
            console.log(teamArray);

            addEmployeeHTML(engineer);
            employeePrompt();
        })
        
}


const htmlBody = () => {
    const template = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Team-Profile-Generator</title>
      </head>
      <body>
          <nav>
          <h1>Team Members</h1>
          </nav>
          <div class="container">
              <div>`;
    fs.writeFile("./dist/index.html", template, (err) => {
        if (err) {
            console.log(err);
        }
    });

};

const addEmployeeHTML = (employee) => {
    return new Promise((resolve, reject) => {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Intern") {
            const school = employee.getSchool();
            data =
                `<div>
            <div>
                <div>
                    <h2>${name}</h2>
                    <h3>Engineer</h3>
                </div>
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email: <a href="mailto:${email}">${email}</a></li>
                    <li>School: ${school}</li>
                </ul>
            </div>
        </div>`;
        } else if (role === "Engineer") {
            const gitHub = employee.getGitHub();
            data =
                `<div>
            <div>
                <div>
                    <h2>${name}</h2>
                    <h3>Intern</h3>
                </div>
                <ul>
                    <li>ID: ${id}</li>
                    <li>Email: <a href="mailto:${email}">${email}</a></li>
                    <li>GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a></li>
                </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = employee.getOfficeNumber();
            data =
                `<div">
            <div>
              <div>
                  <h2>${name}</h2>
                  <h3> Manager</h3>
              </div>
              <ul>
                  <li>ID: ${id}</li>
                  <li>Email: <a href="mailto:${email}">${email}</a></li>
                  <li>Office Number:${officeNumber}</a></li>
               </ul>
            </div>
        </div>`;
        }
        fs.appendFile("./dist/index.html", data, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
}

const footer = () => {
    const template = ` </div>
      </div>
      
  </body>
  </html>`;

    fs.appendFile("./dist/index.html", template, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

initiatePrompts();

 











// initialprompt/manager questions
//push new manager object to team array
// then ask if they want to add another employee(confirm) or are done
//then ask what tye of employee(list)
//then ask relevant questions
//push new intern/engineer object to team array
//then check if they want to add another or if they are done, repeat others
// when done, push to array
//generate html