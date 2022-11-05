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

/*
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
const colors = ["red", "black", "green", 10, [], {}]; // []---massivlarda har doim sanoq 0 dan boshlanadi
console.log(colors[0]);

//----------------------------------------------------------------------------------------------------------------

*/

/*
// LESSON-4

alert("Hello JavaScript");

const place = confirm("Are you here?");
console.log(place);

const currentPlace = prompt("Where are you?", "Seoul");
console.log(currentPlace);

const age = prompt("How old are you?", "18");
console.log(typeof age);

const favouriteColor = [];

favouriteColor[0] = prompt("What's your favourite color #1", "");
favouriteColor[1] = prompt("What's your favourite color #2", "");
favouriteColor[2] = prompt("What's your favourite color #3", "");

console.log(favouriteColor);

*/

//----------------------------------------------------------------------------------------------------------------
/*
// LESSON-5

const channel = prompt("What's your favourite youtuber");
console.log(`https://youtube.com/${channel}`);

const user = "Bakhtiyor";
const job = "JavaScript developer";
console.log(`User name is ${user}, he is ${job}`);
*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-6

console.log(6 + +"9");

// incr => ++, decr => --

let incr = 10;
let decr = 10;

console.log(incr++);
console.log(decr--);

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

// % Ani Bga bo'lganda qoladigan qoldiqni aniqlab beradi
console.log(10 % 3);

// == tenglik belgisi bu faqat qiymat bilan solishtiradi
// === tenglik belgisi bu qimay va ma'lumot turi bilan slishtiradi
console.log(5 * 5 == 25);
console.log(5 * 5 === "25");

// && = va, || = yoki, ! = inkor
const isAge = true;
const isClose = true;
const isChecked = false;

console.log(isAge && isClose && !isChecked);

console.log(2 + 2 * 2 = 6);
console.log(2 + 2 * 2 != 6);
console.log(2 + 2 * 2 == 6);
console.log(2 + 2 * 2 !== 6);
console.log(2 + 2 * 2 == "6");
console.log(2 + 2 * 2 !== "6");

*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-7

const namberOfSeries = prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
    count: namberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("Oxirgi ko'rgan serialingiz"),
   b = prompt("Nechi baho berasiz?"),
   c = prompt("Oxirgi ko'rgan serialingiz"),
   d = prompt("Nechi baho berasiz?");

seriesDB.series[a] = b;
seriesDB.series[c] = d;

const theif = {
    jacket: "Black",
};

const property = "age",
   value = 30;

theif[property] = value;

console.log(theif);
*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-8


const age = +prompt("How old are you?", "");

if (age >18) {
    console.log("Welcome");
} else {
    console.log("No Entry");
}

// tepadagi shart bilan pastdagisi bir xil

age>18 ? console.log("Horror films") : console.log("Carton");


const age = +prompt("How old are you?", "");

if (age > 25) {
    console.log("Horror films");
} else if (age > 18) {
    console.log("Boyevik films");
} else {
    console.log("Cartons");
}

// switch case => har doim qat'iy rejimda ishlaydi

const color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Goo");
        break;
    case "yellow":
        console.log("Slowly");
        break;
    default:
        console.log("Traffic jam");
        break;
}

*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-9

let startNum = 1;

// First
while (startNum <= 20) {
    console.log(startNum);
    startNum++;
}

// Second
do {
    console.log(startNum);
    startNum++;
} while (startNum <= 20);

// Third
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i === 8) {
        break;
    }
    console.log(i);
}
*/

//----------------------------------------------------------------------------------------------------------------

// LESSON-10 >>>>>>>>UYGA VAZIFA

const namberOfSeries = prompt("Nechta serial ko'rdingiz?", "");

const seriesDB = {
    count: namberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz"),
          b = prompt("Nechi baho berasiz?");  
          
    if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (seriesDB.count < 5) {
    console.log("Siz kam serial ko'ripsiz")
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log("Siz klassik tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
    console.log("siz serialchi zvezda ekansiz");
} else {
    console.log("Error");
}

console.log(seriesDB);