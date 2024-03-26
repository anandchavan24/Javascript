// Here are the solutions to the tasks you provided:

// 1. Functions for Array Operations:

// ```javascript
// const data = [{
//     "id": 1,
//     "first_name": "Nicki",
//     "email": "ncrozier0@squarespace.com",
//     "date_of_birth": "2009/05/09"
// }, {
//     "id": 2,
//     "first_name": "Raychel",
//     "email": "rmcgrady1@cpanel.net",
//     "date_of_birth": "1996/11/05"
// }, {
//     "id": 3,
//     "first_name": "Demetris",
//     "email": "dkilshall2@elpais.com",
//     "date_of_birth": "2018/12/31"
// }, {
//     "id": 4,
//     "first_name": "Amata",
//     "email": "abraiden3@canalblog.com",
//     "date_of_birth": "2012/05/23"
// }, {
//     "id": 5,
//     "first_name": "Venita",
//     "email": "vheap4@clickbank.net",
//     "date_of_birth": "2020/10/04"
// }, {
//     "id": 6,
//     "first_name": "Fairfax",
//     "email": "fcrichton5@merriam-webster.com",
//     "date_of_birth": "2009/12/23"
// }, {
//     "id": 7,
//     "first_name": "Kathleen",
//     "email": "kvasyukhnov6@devhub.com",
//     "date_of_birth": "2010/12/20"
// }, {
//     "id": 8,
//     "first_name": "Sam",
//     "email": "scorck7@sitemeter.com",
//     "date_of_birth": "2020/08/30"
// }, {
//     "id": 9,
//     "first_name": "Virgilio",
//     "email": "vferandez8@e-recht24.de",
//     "date_of_birth": "2000/09/07"
// }, {
//     "id": 10,
//     "first_name": "Townie",
//     "email": "tpetyt9@upenn.edu",
//     "date_of_birth": "2018/09/01"
// }];

// // Task 1a: filterByName function
const filterByName = (str) => data.filter(obj => obj.first_name.includes(str));

// // Task 1b: Array.map to return an array of email fields
const getEmails = data.map(obj => obj.email);

// // Task 1c: Array.sort to return the array sorted in descending order by date_of_birth
const sortByDateOfBirthDesc = data.sort((a, b) => new Date(b.date_of_birth) - new Date(a.date_of_birth));

// // Task 1d: getById function
const getById = (id) => data.find(obj => obj.id === id);

// Testing the functions
console.log(filterByName("am")); // Filters by name containing "am"
console.log(getEmails); // Returns an array of all email fields
console.log(sortByDateOfBirthDesc); // Returns the sorted array
console.log(getById(3)); // Returns object with id 3

// 2. Mutating vs. Non-Mutating Methods in JavaScript:

// - `push`: Mutating (modifies the original array).
// - `pop`: Mutating (modifies the original array).
// - `filter`: Non-Mutating (returns a new array without modifying the original).
// - `find`: Non-Mutating (returns the first matching element without modifying the original array).
// - `sort`: Mutating (modifies the original array).
// - `map`: Non-Mutating (returns a new array without modifying the original).

// You can verify whether a method is mutating or non-mutating by observing whether it modifies the original array or returns a new array without modifying the original one.