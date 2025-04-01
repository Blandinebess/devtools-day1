// Error 1:
let message = "Welcome to the debugging exercise!";
console.log(message);

// Error 2:
let button = document.getElementById("actionButton");
  button.addEventListener("click", eventHandler);



// Error 3:
function eventHandler() {
  console.log("Button clicked");
  displayOutput();
}

// Error 4:
function displayOutput() {
  let output = document.querySelector("#output");
  output.innerText = "You clicked the button!";
}

// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = "Updated message";
  console.log(localMessage); // Log the local variable instead of accessing it outside the function
}
updateMessage();
let testButton = document.getElementById("testButton");
if (testButton) {
  testButton.addEventListener("click", testFunction); // Pass the function reference instead of invoking it
}
// Error 7:
document.getElementById("testButton").addEventListener("click", testFunction());

function testFunction() {
  console.log("Test function executed");
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log("Sum is: " + (number1 + number2)); // output: sum: 15
 // Corrected the operator to addition

// Error 9:
let nullVar = [1, 2, 3];
console.log(nullVar.length);

// Removed the invalid property access on null

// Error 10:
let caseSensitiveVar = "Case matters";
console.log(caseSensitiveVar); // Fixed the variable name to match the correct case

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData); // Corrected to log the variable instead of a string

// Error 12:
// Commented out the undefined function call to prevent runtime error
// tryToCallFunction();

// Error 13:
let user = { name: "Alice" }; // Fixed the property name
console.log(user.name);

// Error 14:
let someNumber = 123;
console.log(someNumber); // Removed the invalid method call on a number

// Error 15:
let greeting = "Hello, world!"; // Fixed the syntax for the string
console.log(greeting);

// Error 16:
for (let i = 0; i < 5; i++) {
  if (true) {
    console.log("Five");
    let five = 5; // Moved the declaration inside the block to avoid hoisting issues
  }
}

// Error 17:
let five = "5";
if (five == 5) {
  // Changed strict equality to loose equality for type coercion
  console.log("Five is equal to 5");
} else {
  console.log("Five is not equal to 5");
}

// Error 18:
let numbers = [];
numbers.push(1); // Restored the original push method functionality
console.log(numbers);

// Error 19:
let x = 5; // Declared the variable before using it
console.log(x);

// Error 20:
let myString = "Hello";
// Removed the invalid property assignment on a string
console.log(myString);
