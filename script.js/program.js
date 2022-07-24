console.log('hello world');

 /*let firstNumber =   parseInt (prompt  ('Enter your first number'));
let secondNumber =  parseInt (prompt ('Enter your second number'));
let result = firstNumber + secondNumber; 

alert(result);

console.log(typeof firstNumber); 
//* words game 
*/
 /* let name = prompt('enter your name');
let age = prompt ('enter your age');
let adj = prompt('enter an adjective');
let favGame = prompt('what is your favorite game');

alert(`Hello Mr. ${name} you are ${age} and you look ${adj} today, do you really enjoy playing ${favGame}`);
*/ 

//* functions

 /*function greet (name, lastName, age= 'NONE'){
   var welcome = console.log(name +' '+ lastName +' '+ age);
    return welcome;

};
greet('jhon', 'wick', 29); */

//* function expression 

 /* const add = function (num1, num2){
    var input = console.log((num1 * num2));
    return num1 + num2;
    var output = console.log ((num1 + num2));
    return input;
}
console.log (typeof(num2));



add(5, 5)
*/

//* arrow functions 

 /* var triple = (num1) => (num1 * 3);

console.log(triple(5));
*/

//* Common functions build by java : 
/*
.tolowercase()  use it in prompt().toLowerCase() all the input written in lowerCase
map()
filter()
reduce()
some()
every()
includes()
slice()
splice()
shift()
unshift()
fill()
Other functions worth mentioning
reverse()
sort()
entries()
fill()
find()
flat()
*/

//* exercice 
//* multiplication expression function 
/*
const multiplication = function(num1, num2){
    return (num1 * num2);
}
console.log(multiplication(5, 3));

//* substraction decoration funtion
function substraction(num1 , num2){
    return (num1 - num2);
}
console.log(substraction(20, 30));

//* sum arrow function

sum = (num1, num2) => (num1 + num2);

console.log(sum(10, 20));
*/

//* exercice if statement 
/*
var weatherToday =
      prompt('is the weather hot or cold').toLowerCase();

if(weatherToday === 'hot')
    alert('go eat a strewberries ice cream');

else if (weatherToday === 'cold')
    alert('go wear a jacket')
else
    alert('please enter cold or hot')

weatherToday = 'hot'  ? alert('go eat a strewberries ice cream') :   alert('go wear a jacket') && alert('please enter cold or hot');
*/

//* EXERCICE

//* calculator

 /*let num1 = prompt('please enter your first number:');
let num2 = prompt('please enter your second number');
let equation = prompt('please select one of this  equations (+) or (*) or (/) or (-) (**)');


if(equation === '+'){
     alert (+num1 + +num2);
}else if(equation === '*'){
    alert(num1 * num2);
}else if (equation === '/'){
    alert(num1 / num2);
}else if (equation === '-'){
    alert(num1 - num2)

}else if (equation === '**'){
    alert(num1 ** num2)
}
else{
    alert('please enter a valid operation');
}
*/

//* Arrys testing some functions : 
/*

let to5 = [1, 'second', 3, 4, 5];
let to10 = [6, 7, 8, 9, 10];
console.log(to5);
console.log(to5.indexOf('second'));
// spread operator

let all = [...to5, ...to10];
let cloned = [...to5];
console.log('cloned '+ cloned);
console.log(all);


// add element 
to5.push('new', 'old');

//length
console.log(to10.length);
console.log(to10.length - 1); 


// filtre

let newTo10 = to10.filter(function(num){
    return num === 7;
});
console.log(newTo10);
// map function


let tempruture = [21, 22, 23, 24, 25, 26];

let correctTempruture = tempruture.map(tempruture =>  tempruture  +1.5);

console.log(correctTempruture);

// rest operator

const test = function(...prams){
    console.log(prams);
}

test([2, 3, 4, 5, 8, 9], [5, 6, 8, 7, 2])

// Exercice array 
/* let userString = prompt('please enter a string and we will turn it to an array');
let spilitter = prompt('please enter your splitter') || " "; */

 /*console.log(userString.split(spilitter)); */

// loops 
/*
let names = ['Ahmed', 'Amine', 'sboi', 5];
let lastNames = ['chelbi', 'use1', 'user2'];
*/

//while loop



// for loop
 /* for(i = 0; i < names.length; i++){
    console.log(names[i]); 
}
*/
    // for of
/*
 for (name of names){
    console.log(names);
}
*/

// for each 
/*
lastNames.forEach((name, i) =>{
    console.log(name)
})
*/

// exercice loop
/*
for (var i = 0; i < 10; i++){
    console.log(i);
}
*/

//breack  ( breack & continue)
// fizz buzz game :
/*
let result = [];
for (var i = 1;  i < 51; i++){
    if(i % 3 === 0 && i % 5 === 0) result.push ('fizzbuzz');
    else if(i % 3 === 0) result.push ('buzz');
    else if (i % 5 ===0) result.push('BUZZ');
    else result.push(i); // [] > () issue was here
} 
console.log(result);
*/

// exercice using filter & map functions

const num  = [5, 3, 8, 9, 2, 0, 0, 1, 0, 4, 1, 6];

// filter 
// java filter 
/*
const filtered = num.filter((num, index) => num > 3);
console.log(filtered)
*/
// my filter
/*
const filter = (arr, func) =>{
    var result = [];
   arr.forEach((element, i) => {
    if (func(element, i)) result.push(element);
   });
   return result;
}
*/
// map function by java
/*
const mapped = num.map((num, index) => num ** 2);
console.log(num);
console.log(mapped);
*/

// objects 
/*
const person1 = {
    name : 'lotfi',
    lastName: 'bouchiba',
    colorEyes: 'blue',
    age: 99
}
var age = 'bouchiba';

console.log(person1.age);
console.log([age]);
*/

// exercice objects : 
/*
const userInformations = {
userName : prompt('enter your name:'),
userEmail : prompt('enter your email'),
userCountry : prompt('enter yourcountry'),
}
let access = prompt('enter what info you want to get access to')
let welcome = 'Hello ' + userInformations. userName + 'your email is' + userInformations.userEmail + 'and you live in ' + userInformations.userCountry;
console.log(welcome);

if (access === toLowerCase('username')) alert('user name is ' + userInformations.userName)

else if (access === 'useremail'.toLowerCase) alert('user name is ' + userInformations.userEmail)

else if (access === 'usercountry'.toLowerCase) alert('user name is ' + userInformations.userCountry);
else alert('please enter a valid answer');
*/

// second part of the exercice


/*
var ask = true;
while (ask){
    const key = prompt('which info you want to get acces ! to exit type stop');
    if (key === 'stop') ask = false;
    else alert(userInformation{key});

}
*/

        // METHODS
// object destruction to avoid the repitation of object.key
/*
var user1 = {
    userName : 'Amine',
    userAge : 88,
    userCountry : 'France'
}

var {userName, userAge, userCountry} = user1;

*/
// variable location > location of the web page

// var = global scope , let = scope local

// minifiet write all the code in a single line that would help to load the code faster

// project user login 



