// Grab the HTML elements we need to work with
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let button = document.querySelector('button');
let modalImage = modal.querySelector('img');

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