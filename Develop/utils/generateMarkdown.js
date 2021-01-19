//renderLicenseBadge function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else{
    return`![GitHub license]`
  }
}

// renderLicenseLink function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenceurl) {
  if (licenceurl !== "None"){
    return '* ![Licence Url]( ${licenceurl})'
  }
  else
  return '* '

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license,licenceurl) {
  if (license !== "None"){
  return (`## License
This repo is licensed under ${license}  license\n 
${renderLicenseBadge(license)}\n
${renderLicenseLink(licenceurl)}
`
  )
}
else{
  return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.username}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [installation](#installation)
* [Usage](#usage)
* [Contributers](#contributers)
* [Tests](#tests)
* [License](#licence)
* [Questions](#questions)

## installation
Use following commands to install dependencies:
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributers
${data.Contributers}

## Tests
Used the following command to run tests:
...
${data.tests}

## Questions
Contact me with any questions
  Github Name: ${data.username}
  Repository Url: ${data.repo}
  E-mail: ${data.email}


`;
}

module.exports = generateMarkdown;
