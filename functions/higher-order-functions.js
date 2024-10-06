// HIGHER ORDER FUNCTIONS

 // TAKES ANOTHER FUNCTIONS AS ARGUMENT

 function performOperation(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(performOperation(5, 3, add));     
console.log(performOperation(5, 3, multiply)); 


// RETURN A FUNCTIONS 

function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 


// TAKES ANOTHER FUNCTIONS AS ARGUMENT AND RETURNS A FUNCTION 

function withLogging(fn) {
    return function(...args) {
        const result = fn(...args);
        console.log(`Function called with arguments: ${args}. Result: ${result}`);
        return result;
    };
}

function subtract(a, b) {
    return a - b;
}

const subtractWithLogging = withLogging(subtract);

console.log(subtractWithLogging(10, 3)); 

   

    
