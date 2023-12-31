"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jalandhar"
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }
// Access modifier
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jalandhar";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hit = new User("h@slsl", "harman");
