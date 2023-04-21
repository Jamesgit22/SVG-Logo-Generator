
const ShapeObjs = require("./shapes");
// const svgShape = require('.')

// I need to make a suite of tests to check if the text that the user entered is three characters or less.
describe("Check Logo name", () => {
  describe("Three or less", () => {
    it("Should be three characters or less", () => {
      const test = "1kjg23";
      const validate = new ShapeObjs.ShapeObjs(test);
      expect(validate.text).toBe(false);
    });
  });



// Test to check if the user choose a shape that is a square, circle, or triangle.describe("Check Logo name", () => {
  describe("Shape Shape", () => {
    it("Should check to ensure a background shape was picked", () => {
      const test = "circle";
      const validate = new ShapeObjs.ShapeObjs('txt', 'red', test, 'gray');
      expect(validate.checkShape(test)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="gray" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">txt</text>
    
    </svg>`);
    });
  });
});