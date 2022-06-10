// Including required packages needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

// Array of questions for user input, data of which will be referenced in generateMarkdown.js
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
    },
    {
        type: "input",
        name: "tests",
        message: "What are your test instructions?"
    }

];

// Writes a readme file
function writeToFile(fileName, data) {
    // writes the file with the title of the readme file
    fs.writeFile('README.md', data, err => {
        // If theres an error, it will trigger an error in the console
        if (err) {
            console.error(err);
        }
        console.log("README.md created")
    });
}


// Initializes the questions as prompts in the terminal, once questions are complete it will begin writing thte readme file
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Writing readme file");

            writeToFile(".README.md", generate({ ...data}))
        })
}

// Calling the init function to begin the program
init();
