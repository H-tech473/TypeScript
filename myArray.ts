const superheroes: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = [];
type User = {
    name: string;
    isActive: boolean;
}
const allUsers: User[] = [];
const MLModels: number[][] = [
    [255, 255, 255],
    [232, 2.3, 2335]
]
allUsers.push({name: "hela", isActive: true})
superheroes.push("spiderman")
heroPower.push(2)

let score: number | string = 33;

score = 22;
score = "55"


type User1 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User1 | Admin = { name: "harman", id: 334 };
hitesh = {username: "hc", id: 3838}

// function getDbId(id: number | string){
//     // making some api calls 
//     console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3")

function getDbId(id: number | string){
    if (typeof(id) === "string") {
        id.toLowerCase();
    }
    else if (typeof(id) === "number"){
        id.toExponential(2)
    }
}


// array

const data: number[] = [1,2,3,4]
const datas: string[] = ["1,2,3,4","5"]
const datasn: (string | number)[] = ["2",2]

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "crew"


// Tuples - int, string in presice order
const user: (string | number)[] = ["ho", 1];
let usera: [string, number, boolean];
usera = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type Usse = [number, string];
const aab : Usse = [22, "hello"];

aab[0] = 223;
aab.push(23);


// enums write const if no crazy js code
enum Seatchoice {
    Aisle = "a",
    Middle = "b",
    Window = "c"
}
const hcSeat = Seatchoice.Aisle

// interfaces
interface Useser {
    readonly dbId: number
    email: string,
    userid: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getcoupon(couponName: string, value: number): number
}

interface Useser {
    githubToken?: string
}

// interface Admimin extends Useser, Another_interface {
interface Admimin extends Useser {
    role: "admin" | "ta" | "learner"
}

const harman: Admimin = {
    dbId: 1123, 
    email: "h.sh2",
    role: "learner",
    userid: 2211, 
    githubToken: "hello",
    startTrial: () => { return "hello" },
    getcoupon: (name: "har10", off: 10) => { return 2 }
}


export {}