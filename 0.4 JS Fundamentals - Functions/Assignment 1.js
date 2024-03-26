// Adding Control Flow Statements Inside a Function with return Instead of break:

// If you use return inside a loop (for loop or while loop) or a switch case block, the loop or switch statement will terminate immediately when return is encountered.
// Statements after the loop or switch case block will not run because return exits the function.
// The return value is the value provided after return.
// Yes, you can pass a return value from inside a loop if you use return appropriately.
// You can also return from inside an if block, and similarly, it will terminate the function at that point.



function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}

// test(callbackFunc):
//     Output: "Calling the callback function" 
//     Return value: undefined (since callbackFunc doesn't return anything explicitly)

// test(callbackFunc()):
//     This code will throw an error because callbackFunc() is executed immediately and its return value (5) is passed as an argument to test. However, callbackFunc() itself is not a function, so it cannot be called.
//     test(() => callbackFunc()):
    
// Output: "Calling the callback function"
//     Return value: undefined (similar to the first case)
//     Returning callback() or callback from test:

// If you return callback(), it will execute the callback function and return its value.
// If you return callback, it will return the callback function itself without executing it.
