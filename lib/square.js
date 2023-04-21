const Shapes = require("./shapes.js");

// Class to return the SVG shape and color for a square.
class Square extends Shapes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
  render() {
    return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
