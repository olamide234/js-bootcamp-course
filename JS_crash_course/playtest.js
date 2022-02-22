// console.error("Happy new year")
const age = "Happy new year";
// console.log(age.split(""))  

//array constructor - a way to create an array
const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
const {firstName, lastName, address, address: {city, state}} = person
// console.log(city)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
]
//converting the above array to a json string
const todoJSON = JSON.stringify(todos);
// console.log(JSON.parse(todoJSON));

//for loop
for(let i = 0; i < todos.length; i++) {
    // console.log(todos[i].text);
};
//another way
for(let todo of todos){
    // console.log(todo.text);
};


//high order array methods are most preferable: forEach, map, filter
//forEach loops through them(array)
todos.forEach(function(todo) {
    // console.log(todo.text);
});
//the above can be rewritten as a arrow function like below
todos.forEach((todo) => console.log(todo.text));

//map allows creation of a new array from an array
const todoText = todos.map(function(todo) {
    return todo.text;
});
// console.log(todoText)

//filter allows creation of a new array based on a condition
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
// console.log(todoCompleted)

const todoCompletedd = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
// console.log(todoCompletedd)

 //object oriented programming
 function Person(firstName, lastName, dob) { //constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
 }
 Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
 }
 Person.prototype.getFullName = function(){
     return `${this.firstName} ${this.lastName}`;
 }
//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
// console.log(person1.dob.getFullYear())
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person1)


// In ES6 or ES2015, classes were added 
// With classes, it does the same thing as functions. Classes is 
//just a prettier way(know as syntactic sugar) to write it
class Personn{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person2 = new Personn('John', 'Doe', '4-3-1980');
// console.log(person2.dob.getFullYear())
// console.log(person2.getBirthYear())
// console.log(person2)

// console.log(window);

//DOM manipulation
//Selector
//Single element
console.log(document.getElementById("my-form")); //id selector
console.log(document.querySelector(".container")); //single element selector similar to jquery function
console.log(document.querySelector("h1")); //if there is more than one h1, it's only gonna select the first one

//Multiple element
console.log(document.querySelectorAll('.item'))

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item));

//manipulating the DOM
const ul = document.querySelector('.items')
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText ='Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btnn = document.querySelector('.btn');
// btnn.style.background = 'red';

// event
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => { //the event 'click' can be numerous other thing like 'mouseover', 'mouseout' etc
    e.preventDefault(); // with this the file will no longer submit as it should by default
    // console.log('click');
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>HelloItem</h1>';
})