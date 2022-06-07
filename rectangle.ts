import {Shape} from './obj-shape'
export class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(width: number,height: number,color:string,filled: boolean){
        super(color,filled)
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width
    }
    setWidth(width: number){
        return this.width = width;
    }
    getHeight(){
        return this.height
    }
    setHeight(height: number){
        return this.height = height;
    }
    getArea(){
        return this.height + this.width;
    }
    getPerimeter(): number {
        return (this.width + this.width)/2;
    }
    toString(){
        return `-- Are of Rectangle is: ${this.getArea()} and Perimeter of Rectangle is: ${this.getPerimeter()} and ${super.isFilled() ? "filled" : "not filled"} --`
    }
}


