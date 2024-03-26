// 1. Declare a variable let age = 25;. Write a series of if else statements that will:

// Print child to the console if age is less than equal to 12.

// Print teen to the console if age is between 13 and 18 (inclusive).

// Print adult to the console if age is above 18

let age = 25;

if (age <= 12) {
    console.log("child");
} else if (age >= 13 && age <= 18) {
    console.log("teen");
} else {
    console.log("adult");
}


// 2.  Do the same using switch case.

let ageForSwitchCase = 25;
switch (true) {
    case ageForSwitchCase <= 12:
        console.log("child");
        break;
    case ageForSwitchCase >= 13 && ageForSwitchCase <= 18:
        console.log("teen");
        break;
    default:
        console.log("adult");
}

// 3. Declare a variable let arraySize = 25;. 
// Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
let arraySize = 25;
let numbersArray = [];

for (let i = 1; i <= arraySize; i++) {
    numbersArray.push(i);
}
console.log(numbersArray);


// 4. Accomplish the same using a while loop.

let arraySizeForWhileLoop = 25;
let numbersArrayWhileLoop = [];
let i = 1;

while (i <= arraySizeForWhileLoop) {
    numbersArrayWhileLoop.push(i);
    i++;
}
console.log(numbersArrayWhileLoop);


// 5. Can you use return instead of break in loops?

// Using return instead of break in loops depends on the context. 
// In functions, you can use return to exit the function and return a value. 
// However, in loops, return is not used to exit the loop; break is typically used for that purpose.