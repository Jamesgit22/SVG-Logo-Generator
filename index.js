const inquirer = require("inquirer");
const ShapeObjs = require('./lib/shapes');
// Questions to use to select SVG choices.
const questions = [
  "Please enter a name for your logo (Cannot exceed three characters).",
  "Please eneter a color for the text.",
  "Please choose a shape for your logo.",
  "Please choose a color for the background.",
];

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "logoText",
      },
      {
        type: "input",
        message: questions[1],
        name: "logoTextColor",
      },
      {
        type: "list",
        message: questions[2],
        choices: ["Square", "Circle", "Triangle"],
        name: "logoShape",
      },
      {
        type: "input",
        message: questions[3],
        name: "logoShapeColor",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
    })
    .catch((error) => {
      if (error) throw error;
    });
};

init();
