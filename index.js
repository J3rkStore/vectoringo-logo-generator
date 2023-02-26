const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const shapes = require("./lib/shapes.js");
const Shape = require("./lib/shapes.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

//questions will be called with inquirer.prompt within the setParams function
const questions = [
  {
    type: "list",
    name: "shape",
    message: "select a shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "text",
    message: "enter up to 3 letters",
  },
  {
    type: "input",
    name: "color",
    message: "enter a color for the background (name or hexadecimal)",
  },
  {
    type: "input",
    name: "textColor",
    message: "enter a color for the text (name or hexadecimal)",
  },
];

const shapePrompt = [
  {
    type: "list",
    name: "shape",
    message: "select a shape",
    choices: ["circle", "triangle", "square"],
  },
];

const textPrompt = [
  {
    type: "input",
    name: "text",
    message: "enter up to 3 letters",
  },
];

const colorPrompt = [
  {
    type: "input",
    name: "color",
    message: "enter a color (name or hexadecimal)",
  },
];

function setParams() {
  inquirer.prompt(questions).then((data) => {
    if (data.shape === "triangle") {
      console.log("this is a triangle");
      var svg = new Triangle();
    } else if (data.shape === "circle") {
      console.log("this is a circle");
      var svg = new Circle();
    } else if (data.shape === "square") {
      console.log("this is a square");
      var svg = new Square();
    }
    console.log(data.shape);
    svg.name = data.text.toUpperCase();
    svg.setColor(data.color);
    svg.textColor = data.textColor;
    console.log(svg.color);
    console.log(svg.name);
    fs.writeFile("logo.svg", svg.render(), (err) => {
      err
        ? console.error(error)
        : console.log("\x1b[33mGenerated logo.svg\x1b[0m");
    });
  });
}

setParams();
