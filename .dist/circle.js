"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const obj_shape_1 = require("./obj-shape");
class Circle extends obj_shape_1.Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return Math.PI * this.radius * 2;
    }
    toString() {
        return `-- Are of Circle is: ${this.getArea()} and Perimeter of circle is: ${this.getPerimeter()} and ${super.isFilled() ? "filled" : "not filled"} --`;
    }
}
exports.Circle = Circle;
