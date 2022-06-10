// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines of your project?"
    },
    {
        type: "list",
        name: "badge",
        message: "What is the license for your project?",
        choices: ["CC","MIT","None"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "year",
        message: "What is the current year?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.error(err);
        }
        console.log("README.md created")
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Writing readme file");

            writeToFile(".README.md", generate({ ...data}))
        })
}

// Function call to initialize app
init();
