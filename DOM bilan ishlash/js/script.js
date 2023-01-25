
//----------------------------------------------------------------------------------------------------------------

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