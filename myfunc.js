"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("harman");
signUpUser("ld", "ld", false);
loginUser("h", "hldjf");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "+" + s;
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
var User = {
    name: "harman",
    email: "harman@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// bad syntax
var newuser = { name: "harman", isPaid: false, email: "h@.com" };
createUser(newuser);
function createCourse() {
    return { name: "", price: 0 };
}
var myUser = {
    _id: "hello",
    name: "harman",
    email: "h@ljls.s",
    isActive: false
};
myUser.email = "h@gmail.com";
// myUser._id = "ldjkl"
function createUser1(user) {
    return { name: "", email: "", isActive: false };
}
createUser1({ name: "", email: "", isActive: false });
