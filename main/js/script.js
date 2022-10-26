/*

// LESSON---1

alert("Bu alert");

let number = 10;
const borderColor = "red";
console.log(number);

number = 20;
console.log(number);

const person = {
    name: "Samar",
};

person.name = "Bakhtiyor";
console.log(person);

// Old versions

var clientName = "Bakhtiyor";

*/
//----------------------------------------------------------------------------------------------------------------
// LESSON-2 

"use strict"; // qat'iy rejim

//----------------------------------------------------------------------------------------------------------------

// LESSON-3 

// Number
let number = 5.6;
console.log(8 / 0); // Infinity
console.log("Bakhtiyor" * 8); // NaN

// String
const clientName = `Bakhtiyor`;

// Boolean
const isMarried = false;
const isCircleEarth = true;

// null
console.log(clientAge); // null---hech qanday yo'q o'zgaruvchini ishlatilganda

// undefined
let und;
console.log(und); // undefined---o'zgaruvchi bor lekin qiymati yo'q paytda

// Object 
const thief = {
    //key: value
    age: 30, //number
    jacket: "black", //string
    isLong: false, //boolean
};

console.log(thief);
console.log(thief.age);

// array
//                0       1        2      3   4   5
const colors = ["red", "black", "green", 10, [], {}];
console.log(colors[0]);

//----------------------------------------------------------------------------------------------------------------