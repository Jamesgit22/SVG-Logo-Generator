//  Test that checks if that the SVG shape generated is a square and the correct color.
const Square = require("../lib/square.js");

describe("Check Square Shape", () => {
  it("should return true if the user svg generated is a square.", () => {
    const validate = new Square("tst", "red", "square", "blue");
    expect(validate.render()).toEqual(
      `<rect width="100%" height="100%" fill="blue" />`
    );
  });
});
