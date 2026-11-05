const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.jpg",
    attacked() {
        this.health -= 10;
    },
    levelUp() {
        this.level += 1;
    }
};

attack_button = document.querySelector(".attacked");
level_up_button = document.querySelector(".level-up");

function renderCharacterCard() {
    document.querySelector(".name").textContent = characterCard.name;
    document.querySelector(".class").textContent = `Class: ${characterCard.class}`;
    document.querySelector(".level").textContent = `Level: ${characterCard.level}`;
    document.querySelector(".health").textContent = `Health: ${characterCard.health}`;
    document.querySelector(".image").src = characterCard.image;
}

renderCharacterCard();

attack_button.addEventListener("click", function() {
    characterCard.attacked();
    renderCharacterCard();
    if (characterCard.health <= 0) {
        window.confirm(`${characterCard.name} has been defeated!`);
        attack_button.disabled = true;
}
});

level_up_button.addEventListener("click", function() {
    characterCard.levelUp();
    renderCharacterCard();
    if (characterCard.level == 25) {
        characterCard.image = "snor_upgraded.png";         
    }
});



