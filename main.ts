import { writeFile} from "fs/promises";
import { render } from "./render.js";
import { Pokemon, loadPokemons } from "./pokemon.js";
import { join } from "path";

async function generatePokemonHTML(pokemon: Pokemon) {
    const html = `
        <html>
        <head>
            <title>${pokemon.name}</title>
            <style>
                /* Pending to do :P*/
            </style>
        </head>
        <body>
            <h1>${pokemon.name}</h1>
            <p>Type: ${pokemon.types.join(', ')}</p>
            <p>Abilities: ${pokemon.abilities.join(', ')}</p>
            <p>Moves: ${pokemon.moves.join(', ')}</p>
            <p><img src="${pokemon.imageUrl}" /></p>
        </body>
        </html>
    `;
    const folderPath = join("./pokemon-data"); 
    await writeFile(join(folderPath, `${pokemon.name.toLowerCase()}.html`), html);
}

async function main() {
    const pokemons = await loadPokemons(100);
    const html = render(pokemons);
    await writeFile('pokemons.html', html);

    for (const pokemon of pokemons) {
        await generatePokemonHTML(pokemon);
    }
}

main();
