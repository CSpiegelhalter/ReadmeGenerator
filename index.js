// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          },
          {
            type: 'input',
            message: "What is your project's name?",
            name: 'title',
          },
          {
            type: 'input',
            message: 'Write a short description of your project.',
            name: 'description',
          },
          {
            type: 'list',
            message:  'What kind of license should your project have?',
            default: '(Use arrow keys)',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPLv3', 'BSD 3', 'None']
            
          },
          {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            default: 'npm',
            name: 'install',
          },
          {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'howto',
          },
          {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribute',
          },
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  writeToFile('README.md', generateMarkdown(questions)) 
}

// Function call to initialize app
init();
