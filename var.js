let anotherInstructor = "Tim";

anotherInstructor = "Elie"; // no problems here!

let anotherInstructor = "Tim"; // SyntaxError

// Can reassign, can not redeclare

/////////////////////////////////////////////////////

// Scope with let
var instructor = "Elie";

if(instructor === "Elie"){
    let funFact = "Plays the cello";
}

funFact; // ReferenceError!

// blocks create scope!

/////////////////////////////////////////////////////

// Hoisting with let
function helloInstructor(){
    return elie;
    var elie = "ME!";
}

helloInstructor(); // undefined

function helloSecondInstructor(){
    return colt;
    let colt = "HIM!";
}

helloSecondInstructor(); // ReferenceError
/////////////////////////////////////////////////////

// Use Cases for let
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

// 5 (five times)

for(var i = 0; i < 5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },1000);
    })(i)
}


// 0
// 1
// 2
// 3
// 4

/////////////////////////////////////////////////////

// Refactoring with let

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

// 0
// 1
// 2
// 3
// 4
