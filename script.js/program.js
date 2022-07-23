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

let num1 = prompt('please enter your first number:');
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
 




