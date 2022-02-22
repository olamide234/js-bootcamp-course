// link: https://www.youtube.com/watch?v=PkZNo7MFNFg

// in-line comment
/* multi-line comment

DATA TYPES:
undefined, null, boolean, string, symbol,number, and object 
*/

var myName = "Beau" //first way to declare a variable. this  
// on the other hand can be used throughout your program
//it is declared globally or locally if declared inside a function

myName = 8  // since the variable has been defined it can now be used 
// freely without the variable signature

let ourName = "freecodeCamp" //second way to declare a variable
// 'let' can only be used within the scope, block or expression you defined it. 
ourName = "hanku" // also, one can reset the variable to a new value
// it doesn't allow you declare the same variable twice in the same scope

//comparing let and var
var catName = "Quincy";
var quote;
var catName = "Beau";
function catTalk() {
    "use strict";
    catName = "Olive"
    quote = catName + " says Meow!";
}
catTalk() // this gives no error bcos one can declare a variable with var and 
//initialize with a value more than once

let fatName = "Quincy";
let kuote;  
fatName = "Beau"; 
// let fatName = "Beau"; //this will throw error
function fatTalk() {
    "use strict";
    let fatName = "Oliver";
    let kuote;
    kuote = fatName + " says Meow!";
}
fatTalk()// this gives error bcos one cannot declare a variable with let more than once in the same block


const pi = 3.21 //first way to declare a variable
// 'const' on the other hand has all features of 'let' and in addition can be used
// throughout your program but can't be changed or reassigned
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    // sentence = str + " is amazing!" // this will give error 
    for (let i = 0; i < str.length; i+=2) {
        // console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//mutate an Array declared with const
//while one can't change a variable declared with const, one can mutate an array declared with const
const S = [5, 7, 2];
function editInPlace() {
    "use strict";
    // s = [2, 5, 7]; //this will give syntax error saying s is read-only
    S[0] = 2;
    S[1] = 5;
    S[2] = 7;
}
editInPlace()
console.log(S)

// storing values with assignment operator
var a; // here we are declaring a variable
var b = 2; // here we are declaring and assigning a variable in one line
 
a = 7;
b = a;


//arithmetic calculation
var sum = 10 + 10;
var subt = 46 - 30;
var product = 8 * 10;
var quotient = 66 / 3;

var myVar = 87;
//incrementing number
myVar = myVar + 1; //1
myVar++; // 2

//decremeting number
myVar = myVar - 1;
myVar--;

var ourDecimal = 5.7;
var myDecimal = 0.009;
var product = 2.0 * 2.5 //Ans: 5.0

var remainder;
remainder = 11 % 3;
 


// compound assignment with augmented addition
var a = 3;
var b = 17;

a = a + 12;
a += 12;
b = 9 + b;
b += 9;

// compound assignment with augmented substraction
a = a - 12;
a -= 12;
b = b -9;
b -= 9;

// compound assignment with augmented multiplication
a = a * 12;
a *= 12;
b = b * 9;
b *= 9;

// compound assignment with augmented division
a = a / 12;
a /= 12;
b = b / 9;
b /= 9;


//declaring string variables
var firstName = "Alan";
var lastNmae = "Turing";

//to escape literal quote in string
var myStr = "I am a \"double quoted\" string inside \"doubele quotes\"";
var myStr = 'I am a "double quoted" string inside "doubele quotes"';
var myStr = `'I am a 'double quoted' string inside "doubele quotes"'`;

/**** 
CODE OUTPUT
\' single quote 
\" double quote
\\ backslash
\n newline
\r carriage return 
\t tab
\b backspace
\f form feed
****/

// concatenating str with plus character
var myStr = "I come first. " + "I come second.";

// finding length of string
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

//bracket notation to find first character in string
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// string immutability
var myStr = "Jello World";
myStr[0] = "H"; //this isn't possible. Will results in error
myStr = "Hello World"; //whereas this is possible

//bracket notation to find last character in string
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// store multiple values in an array
var ourArray = ["John", 23];

//access array data with index
var ourArray = [50,60.70];
var ourData = ourArray[0];

//modify array data using index
var ourArray = [50,60.70]
ourArray[1] = 45;

// manipulate array with push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); //this appends these new addition to the end of the list 
// to equals ["Stimpson", "J", "cat", ["happy", "joy"]]

//manipulate array with pop()
var ourArray = [1,2,3];
var removedFromMyArray = ourArray.pop(); //this removes the last item in the array

//manipulate array with shift()
var ourArray = [1,2,3];
var removedFromMyArray = ourArray.shift(); //this removes the first item in the array

//manipulate arrays with unshift()
var ourArray = [1,2,3];
var removedFromMyArray = ourArray.unshift("Happy"); //this appends item(s) to the beginning 
// of an array with another resulting in ["Happy",2,3]

//function
function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionWithArgs(10, 5);

//global scope and functions
var myGlobal = 10; //this is a global variable

function fun1() {
    oopsGlobal = 8; //this serves as a global variable because 'var' keyword is absent
    var oopsGlobal = 3; //this instead is a local variable meaning restricted 
    //for use within its defined functional alone
}

//if statement
function ourTrueOrFalse(isItTrue){
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

//strict equality operator
/* 
3 === 3  //this will be true
3 === '3' //this will be false
3 == 3  //this will be true
3 == '3' //this will be true
*/ 

//strict inequality operator
3 !== 3 //this will be true
3 !== '3' //this will be false
3 != 3 //this will be true
3 != '3' //this will be true

function ourAnd(isItTrue){
    if ((isItTrue > 5) && (isItTrue < 8)) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
function ourOr(isItTrue){
    if ((isItTrue > 5) || (isItTrue < 8)) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
//'else if' is used instead of 'elif'

//switch statement
//instead of using chained 'if statement', 'switch' can be used
//a switch statement test a value and can have many case statement 
//which define many posiible values
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case a: //meaning if the case of val is "a" using the 
            //strict equality concept(e.g val === "a")
            answer = "alpha";
            break;
        case "b":
            answer = "beta";
            break;
        case "c":
            answer = "alpha";
            break;
        // default option in a switch statement
        //the default option is kind of like else
        default:
            answer = "last"
            break;
    }
    return answer;
}
//multiple identical options in switch statements
// sometimes you want a switch statement where multiple input give the same output
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1: 
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}

// build javascript objects
// objects in javascript = dict in python
// explanation: objects are similar to array but instead of using indexes to 
// access data, you use properties(meaning 'key' in python)
var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

// 2 main ways to access object properties
// 1. Accessing object properties with dot notation
var nameValue = ourDog.name; // result is : "Camper"
var legsValue = ourDog.legs; // result is : 4

// 2. Accessing object properties with bracket notation
var nameValue = ourDog["name"]; // result is : "Camper"
var legsValue = ourDog['legs']; // result is : 4

// updating object property
ourDog.name = "Happy Camper"

// add new properties to an object
ourDog.bark = "bow-bow"

//delete propertoes from object
delete ourDog.bark

//testing objects for properties
// you can check if an object has a properties by using the hasownproperty() method
if (ourDog.hasOwnProperty("checkProp")){
    console.log("checkProp")
}
else{
    console.log("doesn't exist")
}

collection = {}
JSON.parse(JSON.stringify(collection)) //this means to make copy of something 
//which here is collection

//iterate with while loop
var myArray = []
var i = 0;
while(i< 5) {
    myArray.push(i);
    i++;
}

//iterate with for loop
var ourArray = [];
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

//iterate odd numbers with a for loop
var ourArray = [];
for (var i = 1; i < 10; i+= 2){
    ourArray.push(i);
}

//iterate with Do...While loops
var myArray = [];
var i = 2;
//difference between 'while' and 'do...while' loop is that 
//while loop checks the condition first before looping
//but d0...while loop will run at least one time and then it'll check the condition
do{
    myArray.push(i);
    i++;
} while (i < 5);
// ans: 5 [2,3,4]

//generate random fractions
function randomFraction() {
    return Math.random();  //answer here cannot be 1 but can be 0.something
}

//generate random whole numbers 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20)

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

//use the parseInt function
//this function takes a string and returns an integer
function convertToInteger(str) {
    return parseInt(str);
}

//use the parseInt function with a radix
// radix signifies the base of the number in the string e.g base 2, 7, 10 etc
function convertToInteger(str, baseform) {
    return parseInt(str, baseform);  //2 here is the required base 
}

//use the conditional (ternary) operator
// condition ? statement-if-true : statement-if-false;
//ternary operator can be used instead of if-else-statement
//e.g
function checkEqual(a, b) {
    if (a === b) {
        return true;
    }
    else{
        return false;
    }
}
 
//the above function checkEqual can be rewritten as
function checkEqual(a, b) {
    return a === b ? true : false;
}

//use multiple conditional (ternary) operators
//great thing about ternary operator is that one can nest them 
//together giving them even more power
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// "use strict" catches common coding mistakes and unsafe actions
// some people use "use strict" at the top of a full file or in starting a function 
function catchMistakes() {
    "use strict";
    catName = "Oliver" //error here is absent of var, const and let keyword 
}


// prevent object mutation
// even with declaring a variable with const, one can't totally prevent it from mutating, 
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //this help freeze the object

    try{
        MATH_CONSTANTS.PI = 99;
    }
    catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI)

//use arrow functions to write concise anonymous functions
var magic = function() { 
    return new Date(); 
} 
//this is a anonymous function and can be re-written as a arrow function as follows
const magic1 = () => new Date();

//write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1,2], [3, 4, 5]));

//write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

//write higher order arrow functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();
console.log(increment(5,2));
console.log(increment(5));


var nope = (function() {
    return function nope(z, k) {
        return z + k + 100;
    }
}) ();
// console.log(nope(4,2));


var nope1 = { 
    z : 4,
    k : 2,
    b : function() {
        return this.z + this.k + 100;
    },
}
// console.log(nope1.b());

let bob = a => a + 100;
// console.log(bob(4))


//use the rest operator with function parameters
const summ = (function() {
    return function summ(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})(); //this is a normal function that can be refraced using rest operator as shown below
// console.log(summ(4, 5, 6))

const sumn = (function() { 
    return function sumn(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
// console.log(sumn(4, 5, 6))

//use the spread operator to evaluate arrays in-place
//spread operator looks like ... but expands an already existing array
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
}) ();
// console.log(arr2);

//use destructuring assignment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54  old method of doing it
//new method
const {x : l, y : j, z : k} = voxel; // a= 3.6, b= 7.4, c= 6.54
// console.log(x)
 
//destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today : {min: 72, max: 83},
    tomorrow : {min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const {tomorrow : {max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
// console.log(getMaxOfTmrw(LOCAL_FORECAST)); // ans = 84.6

//use destructuring assignment to assign variables from arrays
const [v, w] = [1,2,3,4,5,6];
// console.log(v, w); //ans = 1,2

const [p, r, , u] = [1,2,3,4,5,6];
// console.log(p, r, u); //ans = 1, 2, 4

let f = 8, g = 6;
(() => {
    "use strict";
    [f,g] = [g,f]
})();
// console.log(f);
// console.log(g);

//use destructuring assignment with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

//use destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75, 
    average: 35.85
};
const half = (function() {
    return function half({max, min}) { //meaning {max, min} = stats that's introduced in line 600
        return (max + min) / 2.0;
    };
}) ();
// console.log(stats);
// console.log(half(stats));

//create strings using template literals
//template literals are a special type of string that makes creating complex strings easier
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
 //template literal with multi-line and string interpolation
const greeting = `Hello, my name is  person.name}!
I am ${person.age} years old.`;
// console.log(greeting);

//write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age, 
        gender: gender
    };
}; //can be re-written as :
const createPerson1 = (name, age, gender) =>  ({name, age, gender});
// console.log(createPerson1("Zodiac Hasbro", 56, "male"));

//write concise declarative functions
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
}; //can be re-written as :
const bicycle1 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle1.setGear(3)
// console.log(bicycle.gear)

//use  syntax to define a constructor function
var SpaceShuttle = function(targetPlanett){ //constructor function
    this.targetPlanet = targetPlanett;
}
var zeus = new SpaceShuttle('Jupiter'); //older way to create an object is with the new keyboard
console.log(zeus)

//newer way 
//the class syntax replace the constructor function creation
class SpaceShuttle1 {
    constructor (targetPlanett){
        this.targetPlanet = targetPlanett;
    }
}
var zeus = new SpaceShuttle1('Jupiter'); 
// console.log(zeus.targetPlanet)

//another way for the above involving function and class together
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
// console.log(carrot.name);


//use getters and setters to control access to an object
class Book { 
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat{
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(276);
let temp = thermos.temperature; //getter and setter are asset 
//similar to properties though they appear to be function
thermos.temperature = 26;
temp = thermos.temperature;
// console.log(thermos.temperature)


// //understand the differences between import and require

// //understand the differences between import and require
// // to export from a file so that the object exported can be imported in another
// export const capitalizeString = str => str.toUpperCase();
// //or
// const capitalizeString = str => str.toUpperCase();
// export {capitalizeString};
// //NB:this is otherwise known as named export

// //to import
// // import {capitalizeString} from "./string_function"
// // const cap = capitalizeString("hello!");
// // console.log(cap)
// const bae = "string".slice(1)
// console.log(bae);
// //or
//import * as capitalizeStrings from "string_function"; 


// //create a export fallback with export default
// //this is used only when you want to export only one thing from a file
// export default function substract(x,y) {return x - y;} 

// //importing a default export
// import subtract from "math_functions";
// subtract(7,4);
