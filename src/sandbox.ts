let greet: Function;
// what this function can take, the structure, arguments, and return type

// example 1
let greetings: (a: string, b:string)=> void;
greetings = (name: string, greeting: string) => {
 console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if(action === "add"){
    return num1 + num2;
    }
    return num1 - num2;
}

type personObject = { name: string, age: number };

// example 3
let logDetails: (obj: personObject) => void;
logDetails = (ninja: personObject) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}