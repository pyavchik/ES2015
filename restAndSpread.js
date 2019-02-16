function smallestVallue(args) {
    return Math.min(...args);
}

const result = smallestVallue([5, 1, 4]);
console.log(result);

function placeInMiddle(arr, vals) {
    let mid = Math.floor(arr.length / 2);
    arr.splice(mid, 0, ...vals);
    return arr;
}

function joinArrays(...args) {
    return args.reduce((acc, next) => acc.concat(next), []);
}

function sumEvenArgs(...args){
    return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0);
}
