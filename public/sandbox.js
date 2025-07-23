"use strict";
let greet = () => {
    console.log("Hello there!");
};
// greet = "hello" 
let greetings = () => {
    console.log("Hello strict there!");
};
// greetings = "hello strict" // Error: Type 'string' is not assignable to type 'Function'.
greetings();
//Optional parameters in TypeScript
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
console.log(add(5, 10)); // Output: 15
// Optional parameters can be used with default values where ? is not set
// implicitly declare the function return type
const addWithDefault = (a, b, c = 10) => {
    console.log(a + b + c);
    console.log(c);
    return a + b + c;
};
addWithDefault(5, 10); // Output: 15
// addWithDefault(5, 10, "20"); // Output: 15, "20"
addWithDefault(5, 10, 2);
const examPassRate = "60";
const assessmentPassRate = "40";
const obtainedExamMark = 80.4;
const obtainedAssessmentMark = 72.5;
let finalMark = ((obtainedExamMark / 100) * parseInt(examPassRate) + (obtainedAssessmentMark / 100) * parseInt(assessmentPassRate));
console.log(`Final Mark: ${finalMark}%`); // Output: Final Mark: 100
