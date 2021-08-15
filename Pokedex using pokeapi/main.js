let name = document.querySelector(".name");
let type = document.querySelector(".type");
let image = document.querySelector("img");
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");

let pokeContainer = document.getElementById("pokedex");
let crossBtn = document.querySelector(".closeBtn");
let modal = document.querySelector(".modal-container");

crossBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

async function fetchPokemons() {
  for (let i = 1; i <= 150; i++) {
    await getPokemon(i);
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  displayPokemon(pokemon, id);
}

function displayPokemon(pokemon, id) {
  const element = document.createElement("article");
  element.classList.add("pokemons");
  const pokemonsName = pokemon.name;
  const pokemonsImage = pokemon.sprites.front_default;
  element.innerHTML = `<img class="imagefound" src=${pokemonsImage} >
    <h1 class="pokeName">${pokemonsName}</h1>`;
  element.addEventListener("click", () => {
    getModalPokemon(id);
    modal.classList.add("show-modal");
  });
  pokeContainer.appendChild(element);
}

fetchPokemons();

async function getModalPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  let pokeName = pokemon.name;
  let pokeType = pokemon.types[0].type.name;
  let pokeImage = pokemon.sprites.front_default;
  let pokeWeight = pokemon.weight;
  let pokeHeight = pokemon.height;

  name.textContent = pokeName;
  type.textContent = pokeType;
  image.src = pokeImage;
  weight.textContent = pokeWeight;
  height.textContent = pokeHeight;
}
