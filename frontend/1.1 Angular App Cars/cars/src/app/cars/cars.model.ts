export class Car {
    id: number;
    name: string;
    parts: Part[];
 
    constructor(id: number, name: string, parts: Part[]) {
     this.id = id
     this.name = name
     this.parts = parts
    }
 }
 
 export class Part {
     name: string;
     price: number;
 
     constructor(name: string, price: number) {
         this.name = name
         this.price = price
     }
 }