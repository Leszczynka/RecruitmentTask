import { Part } from "../parts/part.model";

export class Car {
    public name: string;
    public parts: Part[];

    constructor(name: string, parts: Part[]) {
        this.name = name;
        this.parts = parts;
    }
}