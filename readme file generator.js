// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license){
    if(license === "MIT License"){
          return "[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
        else if(license ==="Apache License"){
          return"[![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
        else if (license ==="GNU License") 
          return{"[![GNU License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
}
  
  // // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  // function renderLicenseLink(license) {} /// above code includes link 
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}// see above code 
  
  // TODO: Create a function to generate markdown for README

  module.exports = function (data){
    return `# ${data.name}
    ${renderLicenseBadge (data.license)}
    # ${data.title} 
    # Table of Contents 
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#Usage)
    *[Test](#test)
    
    # Description \n
    ${data.description}
    # Installation \n
    ${data.installation}
    # Usage \n
    ${data.usage}
    # Collaborators \n
    ${data.credits}
    #GitHub \n
    [github link] (https/github.com/${data.git})
    #email \n
    ${email}`
  }
