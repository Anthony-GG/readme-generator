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

    var github = answers.github;
    var email = answers.email;


    var readmeContent = `
    <!doctype html>

    <html lang="en">
    <head>
    <meta charset="utf-8">

    <title></title>
    <link rel="stylesheet" href="./assets/stylesheets/normalize.css">
    <link rel="stylesheet" href="./style.css">

    </head>

    <body>

    <h1>Name:</h1>
    <h2>${name}<h2>

    <h1>Location:</h1>
    <h2>${location}<h2>

    <h1>Bio:</h1>
    <p>${bio}<p>

    <h3>Linkedin:</h3>
    <a href=${linkedin}>${linkedin}</a>

    <h3>GitHub:</h3>
    <a href=${github}>${github}</a>

    <script src="./assets/scripts/script.js"></script>
    </body>

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
