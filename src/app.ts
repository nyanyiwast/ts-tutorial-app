import {Invoice} from "./classes/Invoice.js";

// classes
// a blueprint of an object

const invoiceOne = new Invoice('mario', 'work on the website', 4500)
const invoiceTwo = new Invoice('luigi', 'work on the website', 5600)

console.log(invoiceOne, invoiceTwo)

let invoices: Invoice[] = []

// type casting with keyword "as" to tell TS what type of element it is
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);
invoices.push(invoiceOne)
invoices.push(invoiceTwo)

invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format())
})

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// submit event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value, 
        tofrom.value, 
        details.value,
        amount.valueAsNumber //of type number
    );
})