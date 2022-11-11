"use strict";
const character = "Peter Parker Pepper";
const age = 30;
const isBlackBelt = true;
console.log(character);
console.log(age);
console.log(isBlackBelt);
let diameter = 6;
const circ = (param) => {
    return param * Math.PI;
};
console.log(circ(diameter));
//arrays
let names = ["Luigi", "Mario", "Peach"];
names.push("Toad");
let numbersAndStrings = ["hello", 55, 46, "bye"];
numbersAndStrings.push(55);
numbersAndStrings.push("fiddy five");
//object
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 50;
console.log(ninja);
//explicit types
let newCharacters;
let newAge;
let igLoggedIn;
newCharacters = "Doflamingo";
newAge = 48;
igLoggedIn = true;
//explicit arrays
let pirates = [];
let numberArray = [];
pirates.push("Luffy");
console.log(pirates);
//union types
//string | number | boolean might as well be "any"
let mixed = [];
mixed.push("hello");
mixed.push(55);
mixed.push(false);
//mixed.push(false); //causes an error
// explicit objects
let pirateOne;
pirateOne = {
    name: "Zoro",
    skills: "Swords",
    age: 21
};
//or
let pirateTwo;
let greet;
greet = () => {
    console.log("Hello world");
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 2);
console.log(result);
