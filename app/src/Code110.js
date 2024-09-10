

// code is written by Aniket Kadam

// Example of a curried function in JavaScript

function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

const result = multiply(2)(3)(4); // returns 24

console.log("Result of curried multiplication is:", result);
