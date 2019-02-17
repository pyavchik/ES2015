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

const person = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};

const {name: {first: firstName, last:lastName}, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
