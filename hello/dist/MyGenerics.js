"use strict";
const score = [];
const names = [];
function identity1(arg) {
    return arg;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
// identity1("hitesh") 
function identity4(val) {
    return val;
}
// identity4<Botle>({brand: "hello", type: 2})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherfunction(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
