const Shapes = require("./shapes.js");

// Class to return the SVG shape and color for a Trianlge.
class Triangle extends Shapes {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }

  render() {
    return `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
