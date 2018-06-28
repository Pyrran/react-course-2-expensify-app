//
// Object destructuring
//

// const person = {
//   // name: 'Daren',
//   age: 49,
//   location: {
//     city: 'Basildon',
//     temp: 25,
//   },
// };

// const { name: firstname = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = ['21 Malgraves Place', 'Basildon', 'Essex', 'SS13 3PY'];

// const [street, city, county, postcode] = address;
const [, city, county] = address;

console.log(`You are in ${city} ${county}.`);

// Challenge

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
