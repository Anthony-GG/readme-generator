import fs from 'fs';
import inquirer from 'inquirer';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'Title of your project:',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Brief description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Brief description on how to install your project:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Brief description on how to use your project:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Describe how others can contribute to your project:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Describe some simple instructions for testing:',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Select the license used for your project:',
        choices: [new inquirer.Separator(), "MIT", "GNU GPLv3", "Apache"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'GitHub name:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Email best suited for people to reach you at:',
        name: 'email',
      },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var title = answers.title;
    var description = answers.description;
    var install = answers.install;
    var usage = answers.usage;
    var contribute = answers.contribute;
    var test = answers.test;

    var license = answers.license;
    var licenseBadge = "";

    var github = answers.github;
    var email = answers.email;

    switch(license){
    case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
    case "GNU GPLv3":
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
    case "Apache":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
    }



    var readmeContent = `
# ${title}

${licenseBadge}
    
## Description
    
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contrubuting](#contributing)
- [Testing](#testing)
- [License](#license)
- [Contact Me](#questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${contribute}

## Testing

${test}

## License

${license}

## Questions?

You can find me here on GitHub at https://www.github.com/${github} <br><br>
Otherwise, feel free to reach me at ${email}
`;


    fs.writeFile('./README.md', readmeContent, err => {
        if (err) {
        console.error(err);
        }
        // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
