"use strict";
// classes
// a blueprint of an object
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('mario', 'work on the website', 4500);
const invoiceTwo = new Invoice('luigi', 'work on the website', 5600);
console.log(invoiceOne, invoiceTwo);
let invoices = [];
// type casting with keyword "as" to tell TS what type of element it is
const form = document.querySelector('.new-item-form');
console.log(form.children);
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
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
