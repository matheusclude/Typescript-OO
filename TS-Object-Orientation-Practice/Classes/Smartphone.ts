import { ProductsBasicFunctionalities } from "../Interfaces/ProductsBasicFunctionalities";
import { Product } from "./Product";

export class Smartphone extends Product implements ProductsBasicFunctionalities {
    
    constructor(name: string, price: number, available: boolean, private _memory: number) {
        super(name ,price, available);
    }
    
    getProductPriceWithDiscount(): number {
       return this.price * 0.9;
    }

    public get memory(): number {
        return this._memory;
    }
    public set memory(value: number) {
        this._memory = value;
    }

    public getInfo(): string{
        return super.getInfo() + `memory size: ${ this.memory } `;
    }
    
}

