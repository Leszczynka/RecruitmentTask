export class Car {
    name: string;
    parts: Part[];
 
    constructor(name: string, parts: Part[]) {
        this.name = name;
        this.parts = parts;
    }
 }
 
 export class Part {
     name: string;
     price: number;
 
     constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
     }
 }