// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi' returns an error because 'age' is defined as a number
age = 30;
isLoggedIn = true;
character = 'mario';

// arrays
let ninjas: string[];
ninjas = ['shaun', 'crystal', 'ryu'];
// ninjas = [20, 30, 40] returns an error because 'nin
ninjas.push('china-li'); // not valid operation as ninjas is !== [] when initialized

let initializedNinjas: string[] = [];
initializedNinjas.push('yos'); // valid operation since we initialized it as an empty array

// union types
let mixedArray: (string | number)[] = [];
mixedArray.push("hello", 1); // returns 
//mixedArray.push(false) // returns an error as bool type was not declared in mixedArray

console.log(mixedArray)

let mixedVariableUid: string|number; //parentheses are optional but mandatory for arrays
mixedVariableUid = '123';
mixedVariableUid = 123;

// objects
let usersObject: object;
usersObject = { name: 'shaun', age: 30 }; // valid object
usersObject = []; // valid object as arrays are also objects in JS

let loggedInUsers: { 
    name: string;
    uid: string | number;
    isLoggedIn: boolean;
}

loggedInUsers = {
    name: 'mario',
    uid: '123',
    isLoggedIn: true
}

console.log(loggedInUsers);