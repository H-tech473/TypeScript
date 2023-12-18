function addTwo(num: number): number{
    return num + 2;
    // return "hello";
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper("harman");
signUpUser("ld","ld",false);
loginUser("h", "hldjf");

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}


const getHello = (s: string): string => {
    return "+"+s;
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errorMsg: string): void{
    console.log(errorMsg);
}

function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}


const User = {
    name: "harman",
    email: "harman@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}
// bad syntax
let newuser = {name: "harman", isPaid: false, email: "h@.com"};
createUser(newuser)



function createCourse():{name: string, price: number}{
    return {name: "", price: 0}
}


type User = {
    name: string;
    email: string;
    isActive: boolean;
}

type Users = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credit_card_details?: number;
}

let myUser: Users = {
    _id: "hello",
    name: "harman",
    email: "h@ljls.s",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "ldjkl"


function createUser1(user: User): User{
    return {name: "", email: "", isActive: false};
}
createUser1({name: "", email: "", isActive: false})

type cardNumber = {
    cnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & { 
    cvv: number
};


export {}