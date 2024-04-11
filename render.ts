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
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .pokemon img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.7rem;
    }
    .pokemon .name {
      font-weight: bold;
    }
    .pokemon .type {
      font-family: monospace;
    }
  </style>
</head>`;

const renderPokemons = (pokemons: Pokemon[]) => {
  let html = "";
  for (const pokemon of pokemons) {
    html += `<div class="pokemon" onclick="console.log('click works')">
      <img src="${pokemon.imageUrl}" />
      <div class="data">
        <div class="name">${pokemon.name}</div>
        <div class="type">${pokemon.types}</div>
      </div>
    </div>`;
  }
  return html;
}

export const render = (pokemons: Pokemon[]) => {
  return `
<html>
  ${head("Pokemon List")}
  <body>
    ${renderPokemons(pokemons)}
  </body>
</html>`;
};
