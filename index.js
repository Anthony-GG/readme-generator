import fs from 'fs';
import inquirer from 'inquirer';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Where are you based out of location-wise?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Write a quick bio describing yourself(one or two sentences is fine):',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'Please link your Linkedin here:',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'Please link your GitHub here:',
        name: 'github',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var name = answers.name;
    var location = answers.location;
    var bio = answers.bio;
    var linkedin = answers.linkedin;
    var github = answers.github;


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
