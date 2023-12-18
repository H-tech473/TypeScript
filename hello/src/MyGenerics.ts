const score: Array<number> = [];
const names: Array<string> = [];

function identity1<Type>(arg: Type): Type {
    return arg;
}

function identity2(val: boolean | number): boolean | number{
    return val;
}

function identity3(val: any): any{
    return val;
}

// identity1("hitesh") 
function identity4<T>(val: T): T{
    return val
}

interface Botle{
    brand: string,
    type: number,
}

// identity4<Botle>({brand: "hello", type: 2})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[3]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex]
}

interface Database{
    connections: string
    username: string
    password: string
}


function anotherfunction<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

// anotherfunction("hello", {connections: "1", username: "har", password: "lsls", heello: "lsk"})

interface Quiz{
    name: string
    type: string
}

interface course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product)
    }
}