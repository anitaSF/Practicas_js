console.log('Pokeapi!');

const pokeList = document.querySelector('#pokedex');
console.log(pokeList);

async function getPoke(id) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log(error);
    }
}

function getPokemons() {
    for (let i = 1; i <= 150; i++) {
        getPoke(i);
    }
}

getPokemons();




