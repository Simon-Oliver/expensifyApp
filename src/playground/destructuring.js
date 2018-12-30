// // Object Destructuring

// const person = {
//   age: 45,
//   location: {
//     city: 'Berlin',
//     temp: 38
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Lives in ${city} and it is ${temperature}`);
// }

// const book = {
//   title: 'Harry Potter',
//   author: 'J.K Rowling',
//   publisher: {
//     name: 'Bloomsbury'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring

const address = ['123 Sesame Street', 'Berlin', 'Germany', '123456'];
const [, city = 'New York', country] = address;
console.log(`You are in ${city} ${country}`);

const item = ['Coffee (hot)', '$2.00', '$3.00', '$4.00'];

const [order, , medium] = item;
console.log(`A ${order} costs ${medium}`);
