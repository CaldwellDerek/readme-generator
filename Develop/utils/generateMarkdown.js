// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
let markdownText = `
# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${license}

## Tests
${contributing}

## License
${tests}

## Questions
${questions}

[My GitHub](https://github.com/${username})
[My Email](${email})`;

return markdownText;
}

module.exports = generateMarkdown;
