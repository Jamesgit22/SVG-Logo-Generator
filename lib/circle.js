const Shapes = require("./shapes.js");

// Class to return the SVG shape and color for a circle
class Circle extends Shapes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }

  render() {
    return `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
