// Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.

// Use the typeof operator to find the types of different variables. Specially note what the typeof operator returns for arrays, null values and NaN. How can you find if a variable is an array or NaN besides typeof?

let a;

console.log("Before assignment:", a); // Outputs: undefined
a = 10;
console.log("After assignment:", a); // Outputs: 10


const b = "Hello";
console.log("Value of b:", b); // Outputs: Hello

// 'const' declarations must be initialized.ts(1155) if we do const b only

//if we try to assign value to b again it throws an error like
// Uncaught TypeError: Assignment to constant variable."


let num = 5;
let str = "Hello";
let bool = true;
let arr = [1, 2, 3];
let obj = { key: "value" };
let nul = null;
let nan = NaN;

console.log(typeof num); // Outputs: number
console.log(typeof str); // Outputs: string
console.log(typeof bool); // Outputs: boolean
console.log(typeof arr); // Outputs: object
console.log(typeof obj); // Outputs: object
console.log(typeof nul); // Outputs: object (typeof null is "object" due to historical reasons)
console.log(typeof nan); // Outputs: number (NaN is considered a number in JavaScript)


// Note:
// typeof returns "object" for arrays because arrays are objects in JavaScript.
// typeof null returns "object" due to historical reasons, but null is its own primitive type.
// typeof NaN returns "number" because NaN (Not a Number) is considered a number in 

let arr2 = [1, 2, 3];
console.log(Array.isArray(arr2)); // Outputs: true

let num2 = NaN;
console.log(isNaN(num2)); // Outputs: true


// Overall Summary:

// typeof operator returns the type of a variable as a string.
// Arrays are considered objects in JavaScript (typeof returns "object" for arrays).
// typeof null returns "object" due to historical reasons, but null is its own primitive type.
// typeof NaN returns "number" because NaN is considered a number in JavaScript.
// You can use Array.isArray() to check if a variable is an array, and isNaN() to check if a variable is NaN


