function fetchPokemon() {
  const number = document.getElementById("pokedexNumber").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const image = data.sprites.front_default;
      const types = data.types.map((type) => type.type.name).join(", ");
      const moves = data.moves
        .slice(0, 5)
        .map((move) => move.move.name)
        .join(", ");

      document.getElementById("pokemonInfo").innerHTML = `
                    <h3>${name.toUpperCase()}</h3>
                    <img src="${image}" alt="${name}">
                    <p><strong>Typen:</strong> ${types}</p>
                    <p><strong>Attacken:</strong> ${moves}</p>
                `;
    })
    .catch((error) => {
      document.getElementById("pokemonInfo").innerHTML =
        "<p>Pokémon nicht gefunden!</p>";
    });
}
