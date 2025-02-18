import { ProductsBasicFunctionalities } from "../Interfaces/ProductsBasicFunctionalities";
import { Product } from "./Product";

export class Laptop extends Product implements ProductsBasicFunctionalities {
    
    constructor(name: string, price: number, available: boolean, private _screenSize: number) {
        super(name ,price, available);
    }
    
    getProductPriceWithDiscount(): number {
       return this.price * 0.9;
    }

    public get screenSize(): number {
        return this._screenSize;
    }
    public set screenSize(value: number) {
        this._screenSize = value;
    }

    public getInfo(): string{
        return super.getInfo() + `screen size: ${ this.screenSize } `;
    }
    

}

