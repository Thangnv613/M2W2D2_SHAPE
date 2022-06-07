import {Shape} from './obj-shape'

import {Circle} from './circle'

import {Rectangle} from './rectangle'

import {Square} from "./square";


let shape = new Shape("red", false);
console.log(shape);
console.log(shape.toString());


console.log('-----------------------------------')


let circle1 = new Circle('red', true,5) 
console.log(circle1);
console.log(circle1.toString());


console.log('-----------------------------------')


let rect = new Rectangle(10,10,'gray',true);
console.log(rect);
console.log(rect.toString());

console.log('-----------------------------------')

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());