import { Smartphone } from "./Classes/Smartphone";
import { Laptop } from "./Classes/Laptop";
import { Product } from "./Classes/Product";

let products: Product[] = [];


let myIphone = new Smartphone("Iphone 18", 1800, true,10);
let myLaptop = new Laptop("Acer", 2000,true,17);

products.push(myIphone,myLaptop);

console.log("Products basic information: ");


for (let prod of products){
    console.log(prod.getInfo());
}

console.log("-----------------------");
console.log("Product Detailed Information");
console.log("-----------------------");

console.log(myLaptop.getInfo());
console.log(myIphone.getInfo());

