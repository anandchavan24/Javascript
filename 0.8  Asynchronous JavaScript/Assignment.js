// ------------------------------------------------------------------------------------
// 1) Function to stop execution for a specified number of milliseconds:

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const func = async () => {
    console.log("Printing before");
    await sleep(3000); // calling sleep function to pause execution for 3000 milliseconds
    console.log("Printing after");
};

func()

console.log("Execution started")

// so above code print optput as below
// Printing before
// Execution started
// Printing after

// ------------------------------------------------------------------------------------
// 2) Function to fetch data from an API endpoint using promises:


const fetchData = () => {
    return fetch("https://reqres.in/api/users")
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
};

fetchData();

// {
//   page: 1,
//   per_page: 6,
//   total: 12,
//   total_pages: 2,
//   data: [
//     {
//       id: 1,
//       email: 'george.bluth@reqres.in',
//       first_name: 'George',
//       last_name: 'Bluth',
//       avatar: 'https://reqres.in/img/faces/1-image.jpg'
//     },
//     {
//       id: 2,
//       email: 'janet.weaver@reqres.in',
//       first_name: 'Janet',
//       last_name: 'Weaver',
//       avatar: 'https://reqres.in/img/faces/2-image.jpg'
//     },
//     {
//       id: 3,
//       email: 'emma.wong@reqres.in',
//       first_name: 'Emma',
//       last_name: 'Wong',
//       avatar: 'https://reqres.in/img/faces/3-image.jpg'
//     },
//     {
//       id: 4,
//       email: 'eve.holt@reqres.in',
//       first_name: 'Eve',
//       last_name: 'Holt',
//       avatar: 'https://reqres.in/img/faces/4-image.jpg'
//     },
//     {
//       id: 5,
//       email: 'charles.morris@reqres.in',
//       first_name: 'Charles',
//       last_name: 'Morris',
//       avatar: 'https://reqres.in/img/faces/5-image.jpg'
//     },
//     {
//       id: 6,
//       email: 'tracey.ramos@reqres.in',
//       first_name: 'Tracey',
//       last_name: 'Ramos',
//       avatar: 'https://reqres.in/img/faces/6-image.jpg'
//     }
//   ],
//   support: {
//     url: 'https://reqres.in/#support-heading',
//     text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
//   }
// }

// ------------------------------------------------------------------------------------
// 3) What will be printed to the console when the promise resolves and when it rejects ?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};

testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));


// OUTPUT may vary according to math.random()
// One condition

// "Error caught in testAsyncFunction: ", "Test Reject"
// "Response in then block: ", undefined


// -----------------------------------------------------------------------------------------
// 4) What will be printed to the console?
const testAsyncFunction2 = () => {
    return Promise.reject('Test static reject');
};
testAsyncFunction2()
    .then((res) => {
        console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));

// OUTPUT

// Response in then block:  Test Resolve
// Error in catch block Test static reject


// -----------------------------------------------------------------------------------------
// 5. What will be printed to the console ?
const testAsyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve 3');
        } else {
            reject('Test Reject 3');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction 3', err);
        throw new Error('Forced error 3');
    });
};
testAsyncFunction3()
    .then((res) => {
        console.log('Response in then block 3: ', res);
    })
    .catch((err) => console.log('Error in catch block 3: ', err));

// OUTPUT

// Response in then block 3:  Test Resolve 3

// -------------------------------------------------------------------------------------------------------
// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.


const fetchDataWithDelay = () => {
    return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(data => {
                // Delaying the resolution of the promise by 2 seconds
                setTimeout(() => resolve(data), 2000);
            })
            .catch(error => reject(error));
    });
};

// Example usage
fetchDataWithDelay()
    .then(data => {
        console.log("Data received after delay:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

//OUTPUT will print after 2 min

// ---------------------------------------------------------------------------------------------------------

// 7) Complete the above tasks with async/await.
const fetchDataWithDelayAsyncAwait = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();

        // Delaying the resolution of the promise by 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));

        return data;
    } catch (error) {
        throw new Error("Error fetching data: " + error);
    }
};

// Example usage
(async () => {
    try {
        const data = await fetchDataWithDelayAsyncAwait();
        console.log("Data received after delay:", data);
    } catch (error) {
        console.error(error);
    }
})();




