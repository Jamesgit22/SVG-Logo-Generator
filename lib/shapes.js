//  Create a class to create new shape objects
let svgShape;


class ShapeObjs {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  checkShape(){
    switch(this.shape) {
        case 'Square':
            svgShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect width="100%" height="100%" fill="${this.shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
          </svg>`;
          break;
        case 'Circle':
            svgShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
          </svg>`;
          break;
        case 'Triangle':
            svgShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,0 0,200 300,200" fill="${this.shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
          </svg>`;
          break;
    }
    return svgShape;
  }
}



module.exports = {ShapeObjs, svgShape}