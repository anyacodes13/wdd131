// API calls are asynchronous

async function getCatFacts() {
    const url = 'https://catfact.ninja/fact';
    const response = await fetch(url);
    const data = await response.json();
    const catFact = data.fact;
    document.querySelector('#cat-fact').textContent = catFact;
}

document.querySelector('button').addEventListener('click', event => {
    getCatFacts();
});

// display the cat fact in the DOM
// add a new p element to the DOM with the cat fact

