// // Destructuring
//
// const person = {
//     firstName: 'Peter',
//     lastName: 'Smith',
//     age: 27
// };
//
// // const firstname = person.firstName;
// // const lastName = person.lastName;
//
// const {firstName, lastName, age} = person;
//
// console.log(firstName);
// console.log(lastName);
// console.log(age);

// const person = {
//     name: {
//         first: 'Peter',
//         last: 'Smith'
//     },
//     age: 27
// };
//
// const {name: {first, last}} = person;
// console.log(first);
// console.log(last);

// const person = {
//     name: {
//         first: 'Peter',
//         last: 'Smith'
//     },
//     age: 27
// };
//
// const {name: {first: firstName, last:lastName}, age: personAge} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(personAge);

// const person = {
//   name: {
//       firstName: 'Peter',
//       lastName: 'Smith',
//   }, age: 27
// };
//
// // const {role = 'user'} =  person;
// const {permissions: {role = 'user'} = {}} =  person;
//
// console.log(role);

// function connect({
//     host = 'localhost',
//     port = 12345,
//     user = 'guest'} = {}) {
//     console.log('user', user, 'pert:', port, 'host:', host);
// }
//
// //connect({});
// // connect({
// //     host: 'localhost',
// //     port: 1829,
// //     user: 'peter'
// // });
// connect();

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};

const {duck, ...otherAnimals} = dict;
console.log(duck);
console.log(otherAnimals);
