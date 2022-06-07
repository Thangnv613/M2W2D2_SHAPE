"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj_shape_1 = require("./obj-shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
const square_1 = require("./square");
let shape = new obj_shape_1.Shape("red", false);
console.log(shape);
console.log(shape.toString());
console.log('-----------------------------------');
let circle1 = new circle_1.Circle('red', true, 5);
console.log(circle1);
console.log(circle1.toString());
console.log('-----------------------------------');
let rect = new rectangle_1.Rectangle(10, 10, 'gray', true);
console.log(rect);
console.log(rect.toString());
console.log('-----------------------------------');
let square = new square_1.Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());
