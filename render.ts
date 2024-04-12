import { Pokemon } from "./pokemon.js";

const head = (title: string) => 
`<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      background-image: url('https://i.pinimg.com/564x/98/c1/5a/98c15a449a1166ec23f5c9f1f63995dd.jpg');
      background-size: auto;
    }
    
    .pokemon-list {
      max-width: 70%;
      margin: 0 auto; 
      padding: 20px; 
      border: 2px solid #ddd; 
      border-radius: 8px; 
      background-color: rgba(255, 255, 255, 0.8); 
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

    .title {
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
      color: #333;
    }
  </style>
</head>`;

const renderPokemons = (pokemons: Pokemon[]) => {
  let html = "";
  for (const pokemon of pokemons) {
    html += 
    `<a href="pokemon-data/${pokemon.name}.html" class="pokemon" style="text-decoration: none; color: #333;">
      <img src="${pokemon.imageUrl}" alt="${pokemon.name}" style="width: 5em; height: 5em; margin-right: 1em;" />
      <div class="data">
        <h3 class="name" style="font-weight: bold; margin-bottom: 0.2em;">${pokemon.name}</h3>
        <p class="type" style="font-family: monospace; margin: 0;">${pokemon.types.join(", ")}</p>
      </div>
    </a>`;
  }
  return html;
};

export const render = (pokemons: Pokemon[]) => {
  return `
<html>
  ${head("Pokémon List")}
  <body>
    <div class="pokemon-list">
      ${renderPokemons(pokemons)}
    </div>
  </body>
</html>`;
};
