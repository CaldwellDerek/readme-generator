// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "Enter a title for your repository:"
        },
        {
            type: "input",
            name: "Description",
            message: "Enter a description of your project:"
        },
        {
            type: "input",
            name: "Installation",
            message: "Enter the instructions to install your application:"
        },
        {
            type: "input",
            name: "Usage",
            message: "Enter uses for your application:"
        },
        {
            type: "list",
            name: "License",
            message: "What is your name?",
            choices: ["Apache License", "GNU General Public License", "MIT License"]
        },
        {
            type: "input",
            name: "Contributing",
            message: "How can someone contribute to your application?"
        },
        {
            type: "input",
            name: "Tests",
            message: "What tests have been performed on your application?"
        },
        {
            type: "input",
            name: "Username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "Questions",
            message: "What is the best way to reach you with any questions?"
        }
    ])
    .then(answers => {
        console.log(answers);
    })
}

// Function call to initialize app
init();
