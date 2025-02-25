async function fetchPokemon() {
  const number = document.getElementById("pokedexNumber").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorElement = document.createElement("p");
    errorElement.textContent = "Pokémon nicht gefunden!";
    document.getElementById("pokemonInfo").replaceChildren(errorElement);
    return;
  }

  let data = await response.json();

  const name = data.name;
  const image = data.sprites.front_default;
  const types = data.types.map((type) => type.type.name).join(", ");
  const moves = data.moves
    .slice(0, 5)
    .map((move) => move.move.name)
    .join(", ");

  const nameElement = document.createElement("h3");
  nameElement.textContent = name.toUpperCase();

  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt = name;

  const typesElement = document.createElement("p");
  const typesStrong = document.createElement("strong");
  typesStrong.textContent = "Typen: ";
  typesElement.replaceChildren(typesStrong, document.createTextNode(types));

  const movesElement = document.createElement("p");
  const movesStrong = document.createElement("strong");
  movesStrong.textContent = "Attacken: ";
  movesElement.replaceChildren(movesStrong, document.createTextNode(moves));

  document
    .getElementById("pokemonInfo")
    .replaceChildren(nameElement, imgElement, typesElement, movesElement);
}
