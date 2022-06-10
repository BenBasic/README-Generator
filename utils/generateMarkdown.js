// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge === "None") {
    return ``;
  } return `[![license]https://img.shields.io/badge/License-${badge}-darkred.svg]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(badge) {
  if (badge === "None") {
    return ``;
  } else if (badge === "Creative Commons") {
    return `\nhttps://creativecommons.org/terms#8`;
  } else if (badge === "MIT") {
    return `\nhttps://opensource.org/licenses/MIT`;
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(badge, year, username) {
  if (badge === "None") {
    return ``;
  } else if (badge === "Creative Commons") {
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
  } return `- [License](#license)`
}

// TODO: Create a function to generate markdown for README
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
`;
};

module.exports = generateMarkdown;
