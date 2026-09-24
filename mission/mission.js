
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('header').style.color = 'white';
        document.querySelector('img').src = 'images/byui-logo-dark.png';
        document.body.style.color = 'white';
        document.querySelector("body").style.border = '1px solid #ccc';
        
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('header').style.backgroundColor = 'white';
        document.querySelector('img').src = 'images/byuilogo.png';
        document.body.style.color = 'black';
        document.querySelector('header').style.color = 'black';
        document.querySelector("body").style.border = '1px solid black';
    }
}           
                    