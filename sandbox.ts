let character = 'sed'
let age = 30;
let isLoggedIn = false;

// character = 3; // Error: Type 'number' is not assignable to type 'string'
character = 'sed tha dev'; 
// age = "three"; // Error: Type 'string' is not assignable to type 'number'
age = 33;
// isLoggedIn = 1; // Error: Type 'number' is not assignable to type 'boolean'
isLoggedIn = false;

// function to calculate the circumference of a circle

const circumference = (diameter: number) => {
    return Math.PI * diameter;
}

console.log(circumference(2));