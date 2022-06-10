// Creates a function that returns a license badge based on which license is selected in the question promps
function renderLicenseBadge(badge) {
  if (badge === "None") {
    // If there is no license selected, return an empty string
    return ``;
  } else if (badge === "CC") {
    // If CC is selected, it will link the badge image as well as a website URL
    return `[![license](https://img.shields.io/badge/License-${badge}-darkred.svg)](https://creativecommons.org/about/program-areas/software/)`;
  } else if (badge === "MIT") {
    // If MIT is selected, it will link the badge image as well as a website URL
    return `[![license](https://img.shields.io/badge/License-${badge}-darkred.svg)](https://opensource.org/licenses/MIT)`;
  }
};

// Function that returns the link related to the selected license
function renderLicenseLink(badge) {
  if (badge === "None") {
    // If there is no license, return an empty string
    return ``;
  } else if (badge === "CC") {
    return `\nhttps://creativecommons.org/terms#8`;
  } else if (badge === "MIT") {
    return `\nhttps://opensource.org/licenses/MIT`;
  } 
};

// Function that returns the license section of README, it will display different legal content based on what license is selected
function renderLicenseSection(badge, year, username) {
  if (badge === "None") {
    // If there is no license, return an empty string
    return ``;
  } else if (badge === "CC") {
    return `\n## License
    This work is licensed under Creative Commons Attribution 3.0 Unported License.`;
  } else if (badge === "MIT") {
    return `\n## License
    Copyright ${year} ${username}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }
};

function renderLicenseTableContent(badge) {
  if (badge === "None") {
    // Do nothing
  } return `- [License](#license)` // Creates a license category if a license is selected
}

// Function to generate markdown for README, grabbing data from the questions answered and inserting them into the content of the readme with template literals
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.badge)}

  ## Description

  ${data.description}

  ## Table Of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseTableContent(data.badge)}
  - [Guidelines](#guidelines)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.badge, data.year, data.username)}${renderLicenseLink(data.badge)}

  ## Guidelines

  ${data.contribution}

  ## Questions

  This repo was created by https://github.com/${data.username}
  To contact me, please send an email to ${data.email}

  ## Tests
  ${data.tests}
`;
};

// Exports the markdown
module.exports = generateMarkdown;
