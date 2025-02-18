"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smartphone = void 0;
const Product_1 = require("./Product");
class Smartphone extends Product_1.Product {
    constructor(name, price, available, _memory) {
        super(name, price, available);
        this._memory = _memory;
    }
    getProductPriceWithDiscount() {
        return this.price * 0.9;
    }
    get memory() {
        return this._memory;
    }
    set memory(value) {
        this._memory = value;
    }
    getInfo() {
        return super.getInfo() + `memory size: ${this.memory} `;
    }
}
exports.Smartphone = Smartphone;
