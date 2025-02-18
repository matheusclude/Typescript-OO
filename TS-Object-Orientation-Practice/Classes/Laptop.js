"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const Product_1 = require("./Product");
class Laptop extends Product_1.Product {
    constructor(name, price, available, _screenSize) {
        super(name, price, available);
        this._screenSize = _screenSize;
    }
    getProductPriceWithDiscount() {
        return this.price * 0.9;
    }
    get screenSize() {
        return this._screenSize;
    }
    set screenSize(value) {
        this._screenSize = value;
    }
    getInfo() {
        return super.getInfo() + `screen size: ${this.screenSize} `;
    }
}
exports.Laptop = Laptop;
