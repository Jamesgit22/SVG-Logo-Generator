const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");
const Circle = require("./lib/circle.js");
const MakeSVG = require("./lib/create_svg");
const fs = require("fs");

// Questions to use to select SVG choices.
const questions = [
  "Please enter a name for your logo (Cannot exceed three characters).",
  "Please eneter a color for the text.",
  "Please choose a shape for your logo.",
  "Please choose a color for the background.",
];

// Function to run the program
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
      let obj;
      switch (answers.logoShape) {
        case "Square":
          obj = new Square(
            answers.logoText,
            answers.logoTextColor,
            answers.logoShape,
            answers.logoShapeColor
          );
          obj.shape = obj.render();
          break;
        case "Circle":
          obj = new Circle(
            answers.logoText,
            answers.logoTextColor,
            answers.logoShape,
            answers.logoShapeColor
          );
          obj.shape = obj.render();
          break;
        case "Triangle":
          obj = new Triangle(
            answers.logoText,
            answers.logoTextColor,
            answers.logoShape,
            answers.logoShapeColor
          );
          obj.shape = obj.render();
          break;
      }
      console.log(obj);
      return obj;
    })
    .then((obj) => {
      const newSVG = new MakeSVG(obj.text, obj.textColor, obj.shape);
      const logo = newSVG.render();
      return logo;
    })
    .then((obj) => {
      fs.writeFile("./index.html", obj, (err) =>
        err ? console.error("file not create") : console.log("File Created!")
      );
    })
    .catch((error) => {
      if (error) throw error;
    });
};

// Start program
init();
