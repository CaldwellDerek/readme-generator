// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![LicenseBadge](${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://img.shields.io/badge/License-${license}-blue`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is currently using the ${license} License. More information for this can be found in the repository within the document titled: "LICENSE",`
}

// TODO: Create a function to generate markdown for README
// Title, Description, Installation, Usage, License, Contributing, Tests, Username, Email, Questions
function generateMarkdown(
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  username,
  email,
  questions
  ) {
let markdownText = 
`${renderLicenseBadge(renderLicenseLink(license))}
# ${title}

### Table of Contents
1. [Description](#Description)

### Description
${description}

### Installation
${installation}

### Usage
${usage}

### Contributing
${contributing}

### Tests
${tests}

### License
${license}

### Questions
${questions}
Email: ${email}
[My GitHub](https://github.com/${username})`;

return markdownText;
}

module.exports = generateMarkdown;
