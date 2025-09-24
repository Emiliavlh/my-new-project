function sayHello() {
document.querySelector("h3").textContent =
  "Hej " + document.querySelector("input").value;   
}

document.querySelector("button").addEventListener("click", sayHello);

function sayAge() {

    document.querySelector("h4").textContent =
  "Du er " + document.querySelector("#age").value + " år gammel";

}

document.querySelector("#alder").addEventListener("click", sayAge);

function sayEmail() {
    document.querySelector("h5").textContent = "Din email er " + document.querySelector("#email").value; 
}

document.querySelector("#gmail").addEventListener("click", sayEmail);