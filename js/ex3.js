console.log("Eithel's Output from Homework 6 Example 3");

const paragraphElements = Array.from(document.getElementsByTagName("p"));
paragraphElements.forEach(paragraphElement => {
  paragraphElement.style.fontWeight = "900";
  paragraphElement.style.backgroundColor = "yellow"
});

