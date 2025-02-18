"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(_name, _price, _available) {
        this._name = _name;
        this._price = _price;
        this._available = _available;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get available() {
        return this._available;
    }
    set available(value) {
        this._available = value;
    }
    getInfo() {
        return `Product: ${this.name} price: ${this.price} `;
    }
}
exports.Product = Product;
