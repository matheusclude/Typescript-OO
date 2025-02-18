export abstract class Product {

    constructor(private _name: string, private _price: number, private _available: boolean) {
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }
    
    public get available(): boolean {
        return this._available;
    }

    public set available(value: boolean) {
        this._available = value;
    }

    public getInfo(): string{
        return `Product: ${ this.name } price: ${ this.price } `;
    }
}