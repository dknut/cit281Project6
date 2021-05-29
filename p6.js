class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  perimeter = () =>
    this.sides.length > 0 ? this.sides.reduce((acc, cur) => acc + cur) : 0;
}

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area = () => this.length * this.width;
}

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    const s = this.perimeter() / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (sides of data) {
  let newShape = null;
  let shapeArea = 0;
  let shapePerimeter = 0;

  switch (sides.length) {
    case 2:
      newShape = new Rectangle(...sides);
      shapePerimeter = newShape.perimeter();
      shapeArea = newShape.area();
      if (newShape.width === newShape.length) {
        console.log(
          `Square with sides ${sides} has perimeter of ${shapePerimeter} and area of ${shapeArea}`
        );
      } else {
        console.log(
          `Rectangle with sides ${sides} has perimeter of ${shapePerimeter} and area of ${shapeArea}`
        );
      }
      break;
    case 3:
      shapePerimeter = new Triangle(...sides).perimeter();
      shapeArea = new Triangle(...sides).area();
      console.log(
        `Triangle with sides ${sides} has perimeter of ${shapePerimeter} and area of ${shapeArea}`
      );
      break;
    default:
      if (sides.length == 1) {
        console.log(`Shape with ${sides.length} side unsupported`);
      } else {
        console.log(`Shape with ${sides.length} sides unsupported`);
      }
      break;
  }
}
