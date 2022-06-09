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
    return `https://creativecommons.org/licenses/`;
  } else if (badge === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(badge) {
  if (badge === "None") {
    return ``;
  } return `## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.badge}

  ## Description

  ${data.description}
`;
}

module.exports = generateMarkdown;
