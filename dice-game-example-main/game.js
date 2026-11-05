const button = document.querySelector("#rollButton");

button.addEventListener("click", e => {
    setDieImage("assets/die_rolling.gif");
    setTimeout(() => {
        
      rollDie();

    }, 250);
});



function setDieImage(imagePath) {
     document.querySelectorAll('img').forEach(img => {
       img.src = imagePath;  
    });
}

function rollDie() {
    document.querySelectorAll('img').forEach(img => {
    pip = Math.floor(Math.random() * 6) + 1;
    img.src = `assets/hot_pink_dice_${pip}.gif`;
});

};
