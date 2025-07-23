// any type - variables that change in the future

let age: any = 25;
console.log(age);

age = [1, "two"];
console.log(age);

age = { name: "John" };
console.log(age);

let mixed: unknown[] = [];
mixed.push(5);
mixed.push("hello");
console.log(mixed);

let mixed2: any = {
    name: "Jane",
    age: 30,
    isStudent: false,
}
let mixed3 = {...mixed2, students: {name: "Doe", age: 25}};
console.log(mixed2);
console.log(mixed3);

let mixed4: {name: any, age: unknown};
mixed4 = {
    name: 2,
    age: [1,2,3,4]
}

console.log(mixed4);