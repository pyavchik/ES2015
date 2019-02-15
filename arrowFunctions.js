// ES5
var add = function(a,b){
    return a+b;
};

// Replace the keyword 'function' with =>

// ES2015
var add = (a,b) => {
    return a+b;
};

//////////////////////////////////////////

var add = (a,b) => {
    return a+b;
}

var addOneLineExample = (a,b) => a+b;

//////////////////////////////////////////

// ES5
[1,2,3].map(function(value){
    return value * 2;
}); // [2,4,6]

// ES2015
[1,2,3].map(value => value * 2); // [2,4,6];

//////////////////////////////////////////

function doubleAndFilter(arr){
    return arr.map(function(value){
        return value * 2;
    }).filter(function(value){
        return value % 3 === 0;
    })
};

doubleAndFilter([5,10,15,20]); // [30]

var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

doubleAndFilter([5,10,15,20]); // [30]
// Notice that if we only have one parameter, we do not need parenthesis around it with arrow functions!

//////////////////////////////////////////

/* So...what's the catch?
    Arrow functions are not exactly the same as regular functions!
    Arrow functions do not get their own 'this' keyword
    Inside of an arrow function, the keyword this has its original meaning from the enclosing context.
    The fact that arrow functions do not have their own this keyword can be quite helpful - you just need to understand
     when you might NOT want that!
*/
//////////////////////////////////////////

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello undefined"

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }.bind(this), 1000);
    }
}

instructor.sayHi(); // "Hello Elie"

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello Elie"

//Arrow functions do not have their own keyword this.  The keyword this refers to its enclosing context (the instructor object).

//////////////////////////////////////////

var add = (a,b) => {
    return arguments;
}

add(2,4); // ReferenceError: arguments is not defined
//////////////////////////////////////////


function outer() {
    return innerFunction = () => {
        return arguments;
    }
}

outer(1)(2); // only prints out [1]

//////////////////////////////////////////
//Arrow functions should NEVER be used as methods in objects since we will get the incorrect value of the keyword this.
// ES2015 provides a better alternative - we'll see it soon!

var instructor = {
    firstName: "Elie",
    sayHi: () => `Hello ${this.firstName}`;
}

instructor.sayHi(); // "Hello undefined"

//////////////////////////////////////////
