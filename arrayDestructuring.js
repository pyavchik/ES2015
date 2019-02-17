// Array Destructuring

// const line = [[10, 17], [14, 7]];
//
// const [[p1x, p1y], [p2x, p2y]] = line;
//
// console.log(p1x);
// console.log(p1y);
// console.log(p2x);
// console.log(p2y);

// const people = ['chris', 'sandra'];
// const [a, b, c = 'guest'] = people;
//
// console.log(a);
// console.log(b);
// console.log(c);

// const people = ['chris', 'sandra', 'bob'];
// const [a, ...others] = people;
// console.log(a);
// console.log(others);

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res = Object.entries(dict)
    .filter(([, value]) => value === 'squeak')
    .map(([key]) => key);
console.log(res);
