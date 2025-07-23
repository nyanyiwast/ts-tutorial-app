// arrays
let names = ['mario', 'luigi', 'cart', 'toad'];
names.push('boo');
// names.push(2); returns error because '2' is not a string
// names[0] = 2; // returns error because '2' is not a string

let jsMixedArray = ['mario', 2, 'luigi', 3];
let mixedArray: (string | number)[] = [1, "mario", 2, "luigi"];

mixedArray.push('toad');
mixedArray.push(3);
// mixedArray.push(true); // returns error because 'true' is not a string or number
mixedArray[0] = 2;


// objects - additional properties can't be added because of strict mode 
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.name = 'luigi';
// ninja.age = '30'; // returns error because '30' is not a number

ninja = {
    name: 'yoshi',
    belt: 'green',
    //age: 25 age has to be present in the object
    age: 25,
    // skills: [] skills is not allowed because of strict mode and was not defined in the original object
}