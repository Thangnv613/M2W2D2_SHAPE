"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = this.color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
    }
    toString() {
        return `-- A Shape with color of ${this.color} and (${this.isFilled() ? "filled" : "not filled"}) --`;
    }
}
exports.Shape = Shape;
