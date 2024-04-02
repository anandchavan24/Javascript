let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


// let copiedPerson = Object.assign({}, person);
let copiedPerson = JSON.parse(JSON.stringify(person));


copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);
console.log(person);

// let copiedPerson = Object.assign({}, person);
//

// {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     address: {
//       street: 'Amphitheatre Parkway',
//       city: 'Mountain View',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
//   {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     address: {
//       street: 'Amphitheatre Parkway',
//       city: 'Mountain View',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//       street: 'Amphitheatre Parkway',
//       city: 'Mountain View',
//       state: 'CA',
//       country: 'USA'
//     }
//   }


// let copiedPerson = JSON.parse(JSON.stringify(person));
// {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   address: {
//     street: 'Amphitheatre Parkway',
//     city: 'Mountain View',
//     state: 'CA',
//     country: 'USA'
//   }
// }
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//     street: 'North 1st street',
//     city: 'San Jose',
//     state: 'CA',
//     country: 'USA'
//   }
// }



// 1.
//  How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
// {
//  name:”Harry Potter”,
//  age: 12,
//  address: {
//   details: [“4”, “Privet Drive”],
//   area:”Little Whinging”,
//   city: “Surrey”,
//   state: “England”
//  } 
// }

let originalObj = {
    name: "Harry Potter",
    age: 12,
    address: {
        details: ["4", "Privet Drive"],
        area: "Little Whinging",
        city: "Surrey",
        state: "England"
    }
};

// Create a deep copy of the original object
let newObj = JSON.parse(JSON.stringify(originalObj));

// Update the value of address.details[0] to "5"
newObj.address.details[0] = "5";

console.log(newObj);

//   Output

/*
{
    address: {
      area: "Little Whinging",
      city: "Surrey",
      details: ["5", "Privet Drive"],
      state: "England"
    },
    age: 12,
    name: "Harry Potter"
  }
*/


function filterObj(obj) {
    let result = {};

    Object.keys(obj).forEach(key => {
        let value = obj[key];
        if (!(typeof value === "object" && !Array.isArray(value))) {
            result[key] = value;
        }
    });

    return result;
}

let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
        call: "cellphone"
    },
    d: "Dog"
};

console.log(filterObj(obj));
// Output: { a: 'Apple', d: 'Dog' }



