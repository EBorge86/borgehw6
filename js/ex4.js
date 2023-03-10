console.log("Eithel's Output from Homework 6 Example 4");

const linksElement = document.createElement("li");
linksElement.id = "College of Business";
linksElement.textContent = "College of Business"
const linkElement = document.createElement("a");
linkElement.href =
  "https://www.csulb.edu/college-of-business";
linkElement.textContent = "College of Business";

document.getElementById("links").insertBefore(linkElement, document.getElementById("is"));