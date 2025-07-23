// const anchor = document.querySelector('a');
// if(anchor){
// console.log(anchor.href)
// }

// const form = document.querySelector('form')!;
// type casting with keyword "as" to tell TS what type of element it is
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

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