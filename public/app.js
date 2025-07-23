"use strict";
// const anchor = document.querySelector('a');
// if(anchor){
// console.log(anchor.href)
// }
// const form = document.querySelector('form')!;
// type casting with keyword "as" to tell TS what type of element it is
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //of type number
    );
});
