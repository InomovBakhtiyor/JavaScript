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

// "use strict"; // qat'iy rejim

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

/*
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
*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-11

"use strict";
// Function declaration
function calc(a, b) {
    return a + b;
}

const sumOfAandB = calc(10, 5);
console.log(sumOfAandB);

// Function expression
const logger = function () {
    console.log("Hello world");
};

logger();

// Arrow function
const calculator = (a, b) => a + b;

console.log(calculator(10, 5));

//------------
function example() {
    console.log("Hello world");
}

example();

//-----------
function calc(a, b) {
    console.log(a + b);
}

calc(10, 9);
calc(8, 7);

//------------
function sayMyName(name,surname) {
    console.log(`My name is ${name} ${surname}`);
}

sayMyName("Bakhtiyor", "Inomov");

//---------------
//Local verible
let age = 30;

function sayMyName(name,surname) {
    let age = 20;
    console.log(`My name is ${name} ${surname}`);
    console.log(age);
}

sayMyName("Bakhtiyor", "Inomov");
console.log(age);

//------------
//Global verible
let ageGlobal = 30;

function sayMyName(name,surname) {
    ageGlobal = 20;
    console.log(`My name is ${name} ${surname}`);
    console.log(ageGlobal);
}

sayMyName("Bakhtiyor", "Inomov");
console.log(ageGlobal);
*/

//----------------------------------------------------------------------------------------------------------------

/*

// LESSON-12

"use strict";

// length[proparty]---Uzunligi yoki harf va raqamlarni nechtaligini aniqlaydi
const user = "Bakhtiyor";
console.log(user.length);
console.log(user[2]);
console.log(user.toUpperCase());
console.log(user.toLowerCase());

const upperCaseUser = user.toUpperCase();
const lowerCaseUser = user.toLowerCase();

console.log(upperCaseUser);
console.log(lowerCaseUser);
console.log(user);

const arr = [1, 2, 3, 4];
console.log(arr.length);

//--------
const greeting = "Hello world";

console.log(greeting.indexOf("r"));
console.log(greeting.slice(6, 11)); //minus qiymat qabul qiladi
console.log(greeting.substring(0, 5)); //minus qiymat qabul qilmaydi
console.log(greeting.substr(6, 5));

// ------ Math method -----
const num = 8.7;
console.log(Math.round(num));

const borderWidth = "13.8px";
console.log(parseInt(borderWidth));
console.log(parseFloat(borderWidth));

*/

//----------------------------------------------------------------------------------------------------------------

/*

// LESSON-13  Uyga vazifa

let namberOfSeries;

function startApp() {
    namberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

    while(namberOfSeries == "" || 
          namberOfSeries == null || 
          isNaN(namberOfSeries)) {
                          namberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
    }
}

startApp();

const seriesDB = {
    count: namberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMySeries() {
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
}

rememberMySeries();

function detectLevelSeries() {
    if (seriesDB.count < 5) {
        console.log("Siz kam serial ko'ripsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        console.log("Siz klassik tomoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
        console.log("siz serialchi zvezda ekansiz");
    } else {
        console.log("Error");
    }
}

detectLevelSeries();

console.log(seriesDB);

//-----

function showDb(hidden) {
    if(!hidden) {
        console.log(seriesDB);
    }
}

showDb(seriesDB.private);


function writeGenres() {
    for (let i = 0; i <= 3; i++) {
        const genre = prompt(`Yaxshi ko'rgan janringiz? ${i+1}`);
        seriesDB.genres[i] = genre;
    }
}

writeGenres();

*/

//----------------------------------------------------------------------------------------------------------------

/*

// LESSON-14-----callback
"use strict";

function edu(subject, callback) {
    console.log(`I wanna teach ${subject}`);
    callback();
}

edu("JavaScript", function() {
    console.log("That's great");
});

//------
function first(cb) {
    //code
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);
}

function second()  {
    //code
    console.log(2);
}

first(second);

*/

//----------------------------------------------------------------------------------------------------------------

/*

// LESSON-15-----Object. Destruptizatsiya
"use strict";

const theif = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "gray",
        style: "curley",
    },
    howOut: function() {
        console.log("Fast with help doors");
    },
};

theif.howOut();

const {hair, style} = theif.colors;
console.log(hair);
console.log(style);

// console.log(theif.height);

// delete theif.jacket;

// console.log(theif);

console.log(Object.keys(theif).length);

for (let key in theif) {
    if (typeof theif[key] === "object") {
        for (let i in theif[key]) {
            console.log(`Property ${i} has value ${theif[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has value ${theif[key]}`);
    }
}

// Qisqa topshiriq
const friendName = {
    bir: "Abdullo",
    ikki: "Shoxrux",
    uch: "Abbos",
    tort: "Murod",
    besh: {
        beshVaBir: "Laziz",
        beshVaIkki: "Shukurullo",
        beshVaUch: "Izzat",
    },
    howLevel: function() {
        console.log("Best friends");
    },
};

friendName.howLevel();

console.log(friendName.bir);
console.log(friendName.ikki);
console.log(friendName.uch);
console.log(friendName.tort);
console.log(friendName.besh);

const {beshVaBir, beshVaIkki, beshVaUch} = friendName.besh;
console.log(beshVaBir);
console.log(beshVaIkki);
console.log(beshVaUch);

*/

//----------------------------------------------------------------------------------------------------------------

/*
// LESSON-16   -----Masssivlar

const arr = [1, 2, 3, 4, 5, 6];

// lenght---ohirgi obyektning indeksidan kelib chiqib ohirgi elementning indeksi 1 ni qo'shib natija chiqarib beradi
arr[99] = 0;
console.log(arr.length);

arr.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} into arr ${arr}`);
});

console.log(arr);

arr.pop();     // pop---metodi massivning ohirgi elementini olib tashlaydi
arr.push(7);   // push---metodi massivning ohiriga element qo'shadi

// shift va unshift metodlaridan deyarli foydalanilmaydi va foydalanishni tafsiyaham qilishmaydi
arr.shift();     //shift---metodi massivning boshidagi elementni olib tashlaydi
arr.unshift(0);  //shift---metodi massivning boshiga element qo'shadi

console.log(arr);

// for in asosan objectlar bilan ishlaydi
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for of asosan massivlar bilan ishlaydi
for (let velue of arr) {   
    console.log(velue);
}

// array dan maasivga massivdan arrayga o'tkazish
const movies = prompt("What's your favourite movies", "");
const userMovies = movies.split(", ");          // array dan maasivga o'tkazish
userMovies.sort();                              // alfabet tarzida tartiblab beradi
console.log(userMovies.join("- "));             // massivdan arrayga o'tkazish

//-------
const arr1 = [13, 12, 25, 33, 1, 5, 3];
arr1.sort((a, b) => a - b);       // sort()---ichiga funksiya yozilmagan holda faqat 1-da turgan raqamlarga qarab
                                                                                 // solishtiradi
console.log(arr1);

function compareFn(a, b) {        // function(compareFn) funksiya bilan (a, b) => a - b   bir xildir
    return a - b;
}

*/

//----------------------------------------------------------------------------------------------------------------

// LESSON-16   -----Clonlash(nusxalash, nusxa olish), ES6

'use strict';

let x = 10;
let y = x;

y = y + 5;

console.log(x);
console.log(y);


let isMarried = false;
let isArray = isMarried;

isArray = true;

console.log(isMarried);
console.log(isArray);

//---------

/*
const number = {
    x: 10,
    y: 5,
};

const newNumber = number;      // havola
newNumber.x = 15;

console.log(number);
console.log(newNumber);
*/

//----

function nusxaObj(obj) {
    let objNusxa = {};

    for (let key in obj) {
        objNusxa[key] = obj[key];
    }

    return objNusxa;
} 

const numbers = {
    x: 10,
    y: 5,
    z: {
        a: 1,
        b: 2,
    },
};

const newNumbers = nusxaObj(numbers);

newNumbers.x = 15;
newNumbers.z.a = 10;

console.log(numbers);
console.log(newNumbers);

//-----

const numberss = {
    x: 10,
    y: 5,
};

const addNumber = {
    z: 15,
};

const allNumbers = Object.assign(numberss, addNumber);
console.log(allNumbers);

//-------

const arr2 = [1, 2, 3];
const number = arr2.slice();

number[1] = 'Bakhtiyor';

console.log(arr2);
console.log(number);

//------
// SPREAD operatiri massivni yangi massivga aylantirib beradi

const liverpool = ['Salah', 'MAne'];
const manCity = ['Mahrez'];

const mixPlayer = [...liverpool, ...manCity];
console.log(mixPlayer);