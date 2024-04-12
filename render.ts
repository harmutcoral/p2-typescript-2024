import { Pokemon } from "./pokemon.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  <style>
  body {
    margin: 0;
    padding: 0;
  }
  
  .pokemon {
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .4em;
    border-bottom: 1px solid #ddd;
    cursor: pointer; 
    text-decoration: none;
    color: #333;
  }
  
  .pokemon img {
    width: 5em;
    height: 5em;
    margin-right: 1em;
  }
  
  .pokemon .data {
    display: flex;
    flex-direction: column;
  }
  
  .pokemon .name {
    font-weight: bold;
    margin-bottom: 0.2em; 
  }
  
  .pokemon .type {
    font-family: monospace;
    margin: 0; 
  }
</style>
</head>`;

const renderPokemons = (pokemons: Pokemon[]) => {
  let html = "";
  for (const pokemon of pokemons) {
    html += 
    `<a href="pokemon-data/${pokemon.name.toLowerCase()}.html" class="pokemon">
      <img src="${pokemon.imageUrl}" alt="${pokemon.name}" />
      <div class="data">
        <h3 class="name">${pokemon.name}</h3>
        <p class="type">${pokemon.types.join(", ")}</p>
      </div>
    </a>`;
  }
  return html;
};

export const render = (pokemons: Pokemon[]) => {
  return `
<html>
  ${head("Pokemon List")}
  <body>
    ${renderPokemons(pokemons)}
  </body>
</html>`;
};
