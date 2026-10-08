// Grab the HTML elements we need to work with
let gallerySection = document.querySelector('#image_display');
let modal = document.querySelector('dialog');
let button = document.querySelector('button');
let modalImage = modal.querySelector('img');
let menuBtn = document.querySelector("#menu-btn");

// add an event listener to the gallery container to handle clicks on images
gallerySection.addEventListener('click', (event) => {
    console.log(event.target.src);
    if (event.target.src !== undefined) {
        modal.showModal();
        modalImage.src = event.target.src.replace('-sm', '-full');
    }
});

button.addEventListener('click', (event) => {
    modal.close();
    modalImage.src = '';
});

modal.addEventListener('click', (event) => {
    console.log('Modal closed by clicking outside the image');
    if (event.target === modal) {
        modal.close();
        
    }
});



function toggleMenu() {
    menuBtn.classList.toggle("change");
    console.log("click");
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = mobileNav.style.display === '' ? "flex" : '';
    // mobileNav.style.display = mobileNav.style.display === '' ? "flex" : '';
}

menuBtn.addEventListener("click", toggleMenu);