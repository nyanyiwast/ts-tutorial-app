// any type - variables that change in the future
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var age = 25;
console.log(age);
age = [1, "two"];
console.log(age);
age = { name: "John" };
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push("hello");
console.log(mixed);
var mixed2 = {
    name: "Jane",
    age: 30,
    isStudent: false,
};
var mixed3 = __assign(__assign({}, mixed2), { students: { name: "Doe", age: 25 } });
console.log(mixed2);
console.log(mixed3);
var mixed4;
mixed4 = {
    name: 2,
    age: [1, 2, 3, 4]
};
console.log(mixed4);
