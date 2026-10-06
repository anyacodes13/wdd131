
let menuBtn = document.querySelector(".menu-btn");


function toggleMenu() {
    menuBtn.classList.toggle("change");
    console.log("click");
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = mobileNav.style.display === '' ? "flex" : '';
}

menuBtn.addEventListener("click", toggleMenu);