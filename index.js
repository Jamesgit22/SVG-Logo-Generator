const inquirer = require("inquirer");
const ShapesMod = require('./lib/shapes');
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
    //   const newSVG = new ShapeObjs.ShapeObjs(answers)
      const obj = new ShapesMod.ShapeObjs(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
      console.log(obj)
      console.log(obj.checkShape())
    })
    .catch((error) => {
      if (error) throw error;
    });
};

init();

// Commit before refactoring code. Will make multiple class files for each shape.