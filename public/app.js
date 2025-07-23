import { Invoice } from "./classes/Invoice.js";
// classes
// a blueprint of an object
const invoiceOne = new Invoice('mario', 'work on the website', 4500);
const invoiceTwo = new Invoice('luigi', 'work on the website', 5600);
console.log(invoiceOne, invoiceTwo);
let invoices = [];
// type casting with keyword "as" to tell TS what type of element it is
const form = document.querySelector('.new-item-form');
console.log(form.children);
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
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
