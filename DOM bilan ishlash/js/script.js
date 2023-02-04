//----------------------------------------------------------------------------------------------------------------

/*

// LESSON-22   DOM bilan ishlash

'use strict';

// Old way
const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const circles =document.getElementsByClassName('circle');
console.log(circles);

//New way
const wrapper = document.querySelector('wrapper');
console.log(wrapper);

const hearts = wrapper.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach((item) => {
    console.log(item);
});

*/

//----------------------------------------------------------------------------------------------------------------

// LESSON-23   Metodlar bilan ishlash

'use strict';

const box = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const circles = document.querySelectorAll('.circle');
const circle = document.querySelector('.circle');
const hearts = document.querySelectorAll('.heart');

// box.style.backgroundColor = 'red';
// box.style.height = '100px';
// box.style.width = '100px';

// Tepadagi 3 qator o'rniga pastdagi 1 qator
box.style.cssText = 'background-color: red; width:100px; height:100px';

buttons[0].style.width = '100px';
circles[1].style.backgroundColor = 'yellow';
circle.style.backgroundColor = 'blue';

// for ( let i = 0; i < hearts.length; i++ ) {
//     hearts[i].style.backgroundColor = 'green';
// }

// hearts.forEach( (item) => {
//     item.style.backgroundColor = 'gray';
// });

const btn = document.createElement('button');
// const text = document.createTextNode('I am text');

document.body.append(btn);

const myCircle = document.createElement('div');
myCircle.classList.add('circle');
circleWrapper   .append(myCircle);