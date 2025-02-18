"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Smartphone_1 = require("./Classes/Smartphone");
const Laptop_1 = require("./Classes/Laptop");
let products = [];
let myIphone = new Smartphone_1.Smartphone("Iphone 18", 1800, true, 10);
let myLaptop = new Laptop_1.Laptop("Acer", 2000, true, 17);
products.push(myIphone, myLaptop);
console.log("Products basic information: ");
for (let prod of products) {
    console.log(prod.getInfo());
}
console.log("-----------------------");
console.log("Product Detailed Information");
console.log("-----------------------");
console.log(myLaptop.getInfo());
console.log(myIphone.getInfo());
