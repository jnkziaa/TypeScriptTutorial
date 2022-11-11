const character : string = "Peter Parker Pepper";
const age : number = 30;
const isBlackBelt : boolean = true;

console.log(character);
console.log(age);
console.log(isBlackBelt);

let diameter : number = 6;

const circ = (param: number) => {
    return param * Math.PI;
}

console.log(circ(diameter));

//arrays

let names : Array<string> = ["Luigi", "Mario", "Peach"];
names.push("Toad");

let numbersAndStrings : Array<any> = ["hello", 55, 46, "bye"];
numbersAndStrings.push(55);
numbersAndStrings.push("fiddy five");

//object

let ninja = {
    name : "mario",
    belt : "black",
    age : 30
};

ninja.age = 50;

console.log(ninja);

//explicit types
let newCharacters : string;
let newAge : number;
let  igLoggedIn : boolean;

newCharacters = "Doflamingo";
newAge = 48;
igLoggedIn = true;


//explicit arrays
let pirates : Array<string> = [];
let numberArray : Array<number> = [];
pirates.push("Luffy");
console.log(pirates);

//union types
//string | number | boolean might as well be "any"
let mixed : (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(55);
mixed.push(false);
//mixed.push(false); //causes an error


// explicit objects
let pirateOne : object;
pirateOne = {
    name: "Zoro",
    skills : "Swords",
    age : 21
}

//or

let pirateTwo : {
    name : string,
    age : number,
    skills : string,
}


let greet : Function;

greet = () =>{
    console.log("Hello world");
}

greet();

const add = (a : number, b : number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

add(5 , 10, "20");

const minus = (a : number, b :number) : number => {
    return a - b;
}

let result : number = minus(10,2);

console.log(result);


