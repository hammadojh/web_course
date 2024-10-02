// JavaScript Concepts Demonstration

// 1. let vs var vs global variables
console.log("1. let vs var vs global variables");

var varVariable = "I'm a var";
let letVariable = "I'm a let";
globalVariable = "I'm global"; // Not recommended, but demonstrates the concept

function scopeDemo() {
    var varInFunction = "var in function";
    let letInFunction = "let in function";
    
    if (true) {
        var varInBlock = "var in block"; // Function-scoped
        let letInBlock = "let in block"; // Block-scoped
        console.log(letInBlock); // Accessible
    }
    
    console.log(varInBlock); // Accessible
    // console.log(letInBlock); // This would cause an error
}

scopeDemo();
console.log(globalVariable); // Accessible
// console.log(varInFunction); // This would cause an error

// 2. Single line conditional expressions
console.log("\n2. Single line conditional expressions");
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// 3. === vs ==
console.log("\n3. === vs ==");
console.log("1" == 1);  // true (type coercion)
console.log("1" === 1); // false (strict equality)

// 4. Truthy and falsy statements
console.log("\n4. Truthy and falsy statements");
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

// 5. for...in loop
console.log("\n5. for...in loop");
let person = {name: "John", age: 30, job: "developer"};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 6. Functions vs function expressions
console.log("\n6. Functions vs function expressions");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
let sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

console.log(greet("Alice"));
console.log(sayGoodbye("Bob"));

// 7. Arrow functions
console.log("\n7. Arrow functions");
let multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// 8. Objects & Maps
console.log("\n8. Objects & Maps");

// Object
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log(car.brand);

// Map
let fruits = new Map();
fruits.set("apple", 5);
fruits.set("banana", 3);
console.log(fruits.get("apple"));

// 9. Date
console.log("\n9. Date");
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); // Note: Months are zero-indexed (0-11)
console.log(now.getDate());
console.log(now.getDay()); // 0 (Sunday) to 6 (Saturday)

// Creating a specific date
let specificDate = new Date(2023, 0, 15); // January 15, 2023
console.log(specificDate.toDateString());

// Adding days to a date
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);
console.log("One week from now:", futureDate.toDateString());

// Formatting options
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(now.toLocaleDateString('en-US', options));

console.log(now.toLocaleString());

// 10. Math
console.log("\n10. Math");
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.7));

// 11. try-catch
console.log("\n11. try-catch");
try {
    let result = nonExistentFunction();
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This always runs");
}

// 12. Throwing custom errors
console.log("\n12. Throwing custom errors");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // This will work
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    console.log("Caught an error:", error.message);
}



