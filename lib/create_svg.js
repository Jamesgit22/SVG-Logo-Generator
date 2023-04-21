const Shapes = require("./shapes.js");

// Class to create new SVG logos with the information passed from other constuctors.
class MakeSVG extends Shapes {
  constructor(text, textColor, shape) {
    super(text, textColor);
    this.shape = shape;
  }
  render() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>        
        </svg>
</body>
</html>`;
  }
}

module.exports = MakeSVG;
