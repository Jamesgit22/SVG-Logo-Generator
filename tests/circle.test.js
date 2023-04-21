//  Test that checks if that the SVG shape generated is a circle and the correct color.
const Circle = require("../lib/circle.js");

describe("Check Circle Shape", () => {
  it("should return true if the user svg generated is a circle.", () => {
    const validate = new Circle("tst", "red", "circle", "blue");
    expect(validate.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="blue" />`
    );
  });
});
