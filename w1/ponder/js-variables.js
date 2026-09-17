

let age = 33;
let name = "Anya";

console.log(age);

age = 34;

console.log(age);

const eyeColor = "blue";
const policyDisclaimer = "This is a fictional website created for educational purposes only. Any resemblance to real persons, living or dead, or actual events is purely coincidental.";
let favoriteColor = "";
//scope is where variable can be referenced.
if (age == 34) {
    //different scope now
    console.log(name);

    favoriteColor = "pink";

}


console.log(favoriteColor);

// pull something from the page
document.querySelector("h1").style.color = favoriteColor;