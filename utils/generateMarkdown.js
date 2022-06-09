// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge === "None") {
    return ``;
  } return `https://img.shields.io/badge/License-${data.badge}-darkred.svg`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(badge) {
  if (badge === "None") {
    return ``;
  } else if (badge === "Creative Commons") {
    return `https://creativecommons.org/terms#8`;
  } else if (badge === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(badge) {
  if (badge === "None") {
    return ``;
  } else if (badge === "Creative Commons") {
    return `## License
    This work is licensed under Creative Commons Attribution 3.0 Unported License.`;
  } else if (badge === "MIT") {
    return `## License
    Copyright ${data.year} ${data.username}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.badge)}

  ${data.badge}

  ## Description

  ${data.description}
`;
};

module.exports = generateMarkdown;
