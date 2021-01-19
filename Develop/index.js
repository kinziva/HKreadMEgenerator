//  packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


//array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',

    },
    {
        type: 'input',
        message: "Write a short description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Describe how to run the app, list the codes to do the installation",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Enter the command to run the application:",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Who are the contributers on this application?",
        name: 'Contributers'
    },
    {
        type: 'input',
        message: "Is there any test suites avilable for you application? If Yes, decribe how to run tests?",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['ISC', 'Mozilla', 'Apache', 'MIT', 'OpenSource'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Enter the Licence Url, if there is any:",
        name: 'licenceurl',
    },
    {
        type: 'input',
        message: "Enter your GitHub username:",
        name: 'username',
    },
    {
        type: 'input',
        message: "Enter your email address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter your GitHub repo url:",
        name: 'repo',
    },

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! You created your README.md file")
    });

}


// function to initialize app

function init() {
    inquirer.prompt(questions).then(function (inquirerResponses) {
        console.log("Thank you! Generating your README.md File...");
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

init();
