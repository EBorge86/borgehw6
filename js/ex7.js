console.log("Eithel's Output from Homework 6 Example 7");

const integerOne = prompt("Enter an integer");
const integerTwo = prompt("Enter another integer");

const integerOneElement = document.createElement("h4");
integerOneElement.id = integerOne;
integerOneElement.appendChild(document.createTextNode(integerOne));
document.getElementById("content").appendChild(integerOneElement);

const integerTwoElement = document.createElement("h4");
integerTwoElement.id = integerTwo;
integerTwoElement.appendChild(document.createTextNode(integerTwo));
document.getElementById("content").appendChild(integerTwoElement);

// Was unable to figure out how to get the responses side by side as a function. Would like to see this as an example in class or office hours