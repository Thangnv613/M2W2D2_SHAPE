export class Shape{
    private color : string;
    private filled : boolean;
    constructor(color : string,filled : boolean){
        this.color = color;
        this.filled = filled;
    }
    getColor():string{
        return this.color;
    }
    setColor(color : string){
        this.color = this.color
    }
    protected isFilled():boolean{
        return this.filled;
    }
    protected setFilled(filled : boolean):void{

    }
    toString(){
        return `-- A Shape with color of ${this.color} and (${this.isFilled() ? "filled" : "not filled"}) --`
    }
}








