// Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
// What do you expect to happen in both cases? What actually happens in both cases. 
// What is the difference between an object declared as a let or a const variable?


// 1>Creating arrays and objects using let and const:

    // Using let for arrays and objects
    let array = [1, 2, 3];
    let object = { key: "value" };

    // Using const for arrays and objects
    const constArray = [4, 5, 6];
    const constObject = { name: "John" };

// 2> Modifying properties in arrays and objects:

    // Modifying properties in arrays
    array[0] = 10;
    console.log("Modified:", array); // Outputs: [10, 2, 3]

    // Modifying properties in objects
    object.key = "new value";
    console.log("Modified:", object); // Outputs: { key: "updated value" }

    // Modifying properties in const arrays and objects (It will throw an error for this case)
    // constArray[0] = 40; // Error: Assignment to constant variable.
    // constObject.name = "Jane"; // Error: Assignment to constant variable.
