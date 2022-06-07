"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const obj_shape_1 = require("./obj-shape");
class Rectangle extends obj_shape_1.Shape {
    constructor(width, height, color, filled) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        return this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        return this.height = height;
    }
    getArea() {
        return this.height + this.width;
    }
    getPerimeter() {
        return (this.width + this.width) / 2;
    }
    toString() {
        return `-- Are of Rectangle is: ${this.getArea()} and Perimeter of Rectangle is: ${this.getPerimeter()} and ${super.isFilled() ? "filled" : "not filled"} --`;
    }
}
exports.Rectangle = Rectangle;
