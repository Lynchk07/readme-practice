// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const readme = require('./README FILE GENERATOR/test.md')
const generateMarkdown = require("./README FILE GENERATOR/mdgenerator.js")

// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is your project title?',
            
            
        },
        {
            type: 'input',name: 'description',
            message: 'what is your project description?',
            
            
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Table of contents(optional)',
            
            
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps required for install?',
            
            
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples?',
            
            
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators',
            
            
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices:['MIT License','Apache License','GNU License']
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email?',
            
        },

        {
            type: 'input',
            name: 'git',
            message: 'Github username?',
            
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test used?',
            default: "NPM test", 
            
        },
// TODO: Create a function to write README file
    ]).then(answers => {

    fs.writeFile("./README FILE GENERATOR/test.md", generateMarkdown(answers), 
    
    (err) => {
        if(err) console.error(err)
      
        console.log("success")
      }
    
    
    )});

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


