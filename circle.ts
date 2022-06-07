import {Shape} from './obj-shape'
export class Circle extends Shape {
    radius: number;
    constructor(color: string,filled: boolean, radius: number){
        super(color,filled);
        this.radius = radius;
    }
    getArea():number{
        return Math.PI*this.radius*this.radius;
    }
    getPerimeter():number{
        return Math.PI*this.radius*2;
    }
    toString(){
        return `-- Are of Circle is: ${this.getArea()} and Perimeter of circle is: ${this.getPerimeter()} and ${super.isFilled() ? "filled" : "not filled"} --`
    }
}


