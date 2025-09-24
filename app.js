document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
console.log("Hello Multimedia Designers");
console.log("Hi Students!");
console.log("This is your first JavaScript App 🎉");
function sayHello() {
document.querySelector("h3").textContent =
  "Hej " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);

