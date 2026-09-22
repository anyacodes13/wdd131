// select an HTML element from the DOM
let heading = document.querySelector("h1");


console.log(heading);

// using JS to change the style of an HTML element
heading.style.color = "deeppink";
heading.style.fontSize = "3em";
heading.style.border = "2px dashed #035f9c";

// returns a list of elements
console.log(document.querySelectorAll(".list"));

// adding a new class
let topicsClassList = document.querySelector("#topics").classList;
topicsClassList.add("special");
topicsClassList.toggle("special");

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = `You selected ${codeValue}`;
})