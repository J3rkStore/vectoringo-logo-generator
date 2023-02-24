const { Circle, Triangle, Square } = require("./shapes");

describe("setColor", () => {
  it("should set the color of a shape to the color passed", () => {
    const col = "blue";
    const shape = new Triangle();
    expect(shape.setColor(col)).toEqual("blue");
  });
});
