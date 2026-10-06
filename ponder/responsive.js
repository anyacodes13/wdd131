
let menuBtn = document.querySelector(".menu-btn");


function toggleMenu() {
    menuBtn.classList.toggle("change");
    let nav = document.querySelector("nav");
    nav.style.display = nav.style.display === '' ? "flex" : '';
    console.log("click");
}

menuBtn.addEventListener("click", toggleMenu);