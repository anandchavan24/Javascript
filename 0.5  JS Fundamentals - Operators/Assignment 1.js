// Here are the answers to your questions:

// 1. Difference between ++i and i++:
//    - `++i` is the pre-increment operator, which increments the value of `i` and then returns the incremented value.
//    - `i++` is the post-increment operator, which returns the current value of `i` and then increments `i`.

let i = 5;
let a = ++i; // Here, i is first incremented to 6, then assigned to a
console.log("Value of a and i is ", a, i)
// Now, i = 6, a = 6

let j = 5;
let b = j++; // Here, the current value of i (5) is first assigned to a, then i is incremented to 6
// console.log("Value of a and j is ", b, j)
// Now, j = 6, b = 5



// 2. Behavior of passing an index beyond the range or a negative index in a string:
//    - If you pass an index beyond the range of the string, JavaScript returns `undefined`.
//    - Passing a negative index also results in `undefined`.

let str = "Hello";
// console.log(str[10]); // Output: undefined
// console.log(str[-1]); // Output: "o" (last character)
// console.log(str[-2]); // Output: "l" (second-to-last character)



// 3. JSON.stringify for arrays and nested objects:
//    - `JSON.stringify` works for arrays by converting them into a JSON string.
//    - It also works for nested objects, converting the entire structure into a JSON string.
//    - When you pass numbers, strings, undefined, null, or other valid JSON values to `JSON.stringify`, it converts them into their respective JSON representations within the string.

let arr = [1, 2, { a: 3, b: 4 }];
let jsonString1 = JSON.stringify(arr);
// console.log(jsonString1); // Output: "[1,2,{"a":3,"b":4}]"

let obj = { name: "John", age: 30, address: { city: "New York", zip: "10001" } };
let jsonString2 = JSON.stringify(obj);
// console.log(jsonString2);

/* Output:
   "{"name":"John","age":30,"address":{"city":"New York","zip":"10001"}}"
*/



// 4. Behavior of passing a regular/invalid JSON string to JSON.parse:
//    - `JSON.parse` will throw an error if you pass an invalid JSON string.
//    - If an invalid JSON string is encountered during program execution, it can cause the program to halt if not handled properly.
//    - Other parts of the code may not execute correctly after encountering such an error, especially if the error is not caught and handled appropriately. It's essential to handle JSON parsing errors to ensure the smooth execution of the program.

let jsonString = '{"name": "John", "age": 30}';
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
// Output:
//    {
//      name: "John",
//      age: 30
//    }



let invalidJsonString = '{name: "John", age: 30}';
try {
    let parsedObject = JSON.parse(invalidJsonString);
    console.log(parsedObject); // This line will not be executed
} catch (error) {
    console.error('Error parsing JSON:', error.message);
    // Output: Error parsing JSON: Unexpected token n in JSON at position 1
}
