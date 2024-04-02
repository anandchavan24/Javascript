Example:
//  const users = [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// "date_of_birth": "2009/05/09"
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// "date_of_birth": "1996/11/05"
// }];
// mapBy(users, 'first_name') 

// //This should return
// //{
// // “Nicki”:{id:1, first_name:”Nicki”, ...},
// // “Raychel”:{id:2, first_name:”Raychell”, ...},
// //}

function mapBy(arr, key) {
    return arr.reduce((result, obj) => {
        result[obj[key]] = obj;
        return result;
    }, {});
}

const users = [
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09"
    },
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05"
    }
];

console.log(mapBy(users, 'first_name'));




// ● Write a functiongroupBy to convert an array of objects into groups based on the specified key:
//  let users = [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// "date_of_birth": "2009/05/09",
// “gender”:”Male”,
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// "date_of_birth": "1996/11/05",
//   “gender”:”Female”
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// "date_of_birth": "2018/12/31",
//   “gender”:”Male”
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// "date_of_birth": "2012/05/23",
//   “gender”:”Female”
// }];
// groupBy(users, “gender”)
// //This should return 
// //{
// //“Male”:[
// // {id:1, first_name:”Nicki”, ...}, 
// // {id:3, first_name:”Demetris”, ...}
// //]
// //“Female”:[
// // {id: 2, first_name:”Raychel”, ...},
// // {id: 4, first_name:”Amata”, ...}
// //]
// //}

function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        const keyValue = obj[key];
        if (!result[keyValue]) {
            result[keyValue] = [];
        }
        result[keyValue].push(obj);
        return result;
    }, {});
}

let users2 = [
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender": "Male"
    },
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender": "Female"
    },
    {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender": "Male"
    },
    {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender": "Female"
    }
];

console.log(groupBy(users2, "gender"));


// ● Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 
// Example:
//  let users = [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// "date_of_birth": "2009/05/09",
// “gender”:”Male”,
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// "date_of_birth": "1996/11/05",
//   “gender”:”Female”
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// "date_of_birth": "2018/12/31",
//   “gender”:”Male”
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// "date_of_birth": "2012/05/23",
//   “gender”:”Female”
// }]
// sort(users, “id”, “desc”) //Should return users sorted by id in descending order
// sort(users, “first_name “desc”) //Should return users sorted by first_name in ascending order

function sort(arr, key, order = 'asc') {
    return arr.sort((a, b) => {
        let comparison = 0;
        if (a[key] > b[key]) {
            comparison = 1;
        } else if (a[key] < b[key]) {
            comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
    });
}

let users3 = [
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender": "Male"
    },
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender": "Female"
    },
    {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender": "Male"
    },
    {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender": "Female"
    }
];

console.log(sort(users3, "id", "desc"));
console.log(sort(users3, "first_name", "asc"));


// ● Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
// Example:

// ● let userNames = [{
// "id": 1,
// "first_name": "Nicki",
// }, {
// "id": 2,
// "first_name": "Raychel",
// }, {
// "id": 3,
// "first_name": "Demetris",
// }, {
// "id": 4,
// "first_name": "Amata",
// }]
// let userEmails = [{
// "id": 2,
// "email": "rmcgrady1@cpanel.net",
// }, {
// "id": 1,
// "email": "ncrozier0@squarespace.com",
// }, {
// "id": 4,
// "email": "abraiden3@canalblog.com",
// }, {
// "id": 3,
// "email": "dkilshall2@elpais.com",
// }]

// mergeById(userNames, userEmails) 
// //This should return an array of users in the format: 
// [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// }]

// ● Write a function to filter an array of strings to hold only unique values



function mergeById(arr1, arr2) {
    const map = new Map();
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    for (const obj of arr2) {
        const existing = map.get(obj.id);
        if (existing) {
            Object.assign(existing, obj);
        } else {
            map.set(obj.id, obj);
        }
    }
    return Array.from(map.values());
}

let userNames = [
    {
        "id": 1,
        "first_name": "Nicki",
    },
    {
        "id": 2,
        "first_name": "Raychel",
    },
    {
        "id": 3,
        "first_name": "Demetris",
    },
    {
        "id": 4,
        "first_name": "Amata",
    }
];
let userEmails = [
    {
        "id": 2,
        "email": "rmcgrady1@cpanel.net",
    },
    {
        "id": 1,
        "email": "ncrozier0@squarespace.com",
    },
    {
        "id": 4,
        "email": "abraiden3@canalblog.com",
    },
    {
        "id": 3,
        "email": "dkilshall2@elpais.com",
    }
];

console.log(mergeById(userNames, userEmails));


//OUTPUT

// [{
//     email: "ncrozier0@squarespace.com",
//     first_name: "Nicki",
//     id: 1
//   }, {
//     email: "rmcgrady1@cpanel.net",
//     first_name: "Raychel",
//     id: 2
//   }, {
//     email: "dkilshall2@elpais.com",
//     first_name: "Demetris",
//     id: 3
//   }, {
//     email: "abraiden3@canalblog.com",
//     first_name: "Amata",
//     id: 4
//   }]
