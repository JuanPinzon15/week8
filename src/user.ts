import { Logable } from "./logable";
import { Payable } from "./payable";

export abstract class User implements Logable{
    name?: string;
    bday?: Date;
    id: number;

    constructor(name: string, bday: Date, id: number){
        this.name= name
        this.bday= bday
        this.id= id
    }

    greet(value: string) {
        console.log(`${value} ${this.name}`);
    }

    abstract getType(): string 
    
}