const { log } = require("console");

//  Class to create new shape objects
let svgShape;

class Shapes {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

module.exports = Shapes;
