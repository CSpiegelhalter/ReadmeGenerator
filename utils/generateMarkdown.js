
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    myLicense = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)'
  }
  else if (license == "APACHE 2.0") {
    myLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license == "GPLv3") {
    myLicense = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)'
  }
  else if (license == "BSD 3") {
    myLicense = '[![License](https://img.shields.io/badge/License-BSD%203-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  else {
    myLicense = "No License"
  }
  return myLicense

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  license = renderLicenseSection(data.license)
  return `# ${data.title}

  ${license}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions?](#questions?)

  ## Installation
  To install necessary dependencies, run the following command(s)
      
    ${data.install}
  
  ## Usage
    ${data.howto}

  ## License
  This project is under the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the folowing command:
      
    ${data.tests}

  ## Questions? 
  If you have any questions feel free to contact me directly at ${data.email}. 

  If you want to see more of my work visit here: [${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
