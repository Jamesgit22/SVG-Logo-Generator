//  Test that checks if that the SVG shape generated is a triangle and the correct color.
const Triangle = require("../lib/triangle.js");

describe("Check Triangle Shape", () => {
  it("should return true if the user svg generated is a square.", () => {
    const validate = new Triangle("tst", "red", "triangle", "blue");
    expect(validate.render()).toEqual(
      `<polygon points="150,0 0,200 300,200" fill="blue" />`
    );
  });
});
