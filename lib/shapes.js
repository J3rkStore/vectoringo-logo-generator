class Shape {
  constructor(color, name, textColor) {
    this.color = color;
    this.name = name;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(color, name, textColor) {
    super(color, name, textColor);
  }
  render() {
    return `
    <svg width="301" height="301" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <polygon
    points="10 290 150 10 290 290"
    stroke="${this.textColor}"
    fill="${this.color}"
    stroke-width="5"
  />
  <text 
  x="150" 
  y="150" 
  text-anchor="middle" 
  font-size="100" 
  fill="${this.textColor}" 
  dominant-baseline="middle">
  ${this.name}</text>
  
  </svg>
    `;
  }
}

class Square extends Shape {
  constructor(color, name, textColor) {
    super(color, name, textColor);
  }

  render() {
    return `
    <svg width="310" height="310" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect
    x="10"
    y="10"
    width="290"
    height="290"
    stroke="${this.textColor}"
    fill="${this.color}"
    stroke-width="5"
  />
  <text 
  x="150" 
  y="150" 
  text-anchor="middle" 
  font-size="100" 
  fill="${this.textColor}" 
  dominant-baseline="middle">
  ${this.name}</text>
  
  </svg>
    `;
  }
}

class Circle extends Shape {
  constructor(color, name, textColor) {
    super(color, name, textColor);
  }

  render() {
    return `
    <svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="150"
    cy="150"
    r="140"
    stroke="${this.textColor}"
    fill="${this.color}"
    stroke-width="5"
  />
  <text 
  x="150" 
  y="150" 
  text-anchor="middle" 
  font-size="100" 
  fill="${this.textColor}" 
  dominant-baseline="middle">
  ${this.name}</text>


</svg>
    `;
  }
}

// module.exports = Shape;
// module.exports = Triangle;
// module.exports = Circle;
// module.exports = Square;
module.exports = { Circle, Square, Triangle };
