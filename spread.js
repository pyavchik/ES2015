// //Used on arrays to spread each value out (as a comma separated value)
// // Useful when you have an array, but what you are working with expects comma separated values
//
// // // ES5
// // var arr1 = [1,2,3];
// // var arr2 = [4,5,6];
// // var arr3 = [7,8,9];
// //
// // var combined = arr1.concat(arr2).concat(arr3);
// //
// // console.log(combined);
// //
// //
// // // ES2015
// // var combined2 = [...arr1, ...arr2, ...arr3];
// // console.log(combined2);
//
// function sumValues(a, b, c) {
//     return a+b+c;
// }
//
// var nums = [1, 2, 4];
// console.log(sumValues(...nums));


const arr = [1, 2, 3];
const arr2 = [-4, 5, -10]

// console.log(Math.max(...arr));
//
// console.log(Math.random(...arr));

// console.log(Math.max(...arr, ...arr2));

const allArrays = [...arr, ...arr2];
console.log(allArrays);
