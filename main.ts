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
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    max-width: 50%;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .capitalize {
                    text-transform: capitalize;
                }
                
                h1 {
                    margin-bottom: 10px;
                }

                img {
                    width: 15em;
                    height: 15em;
                    border-radius: 8px;
                }

                p {
                    margin-bottom: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 class="capitalize">${pokemon.name}</h1>
                <p><strong>Type:</strong> ${pokemon.types.join(', ')}</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</p>
                <p><strong>Moves:</strong> ${pokemon.moves.join(', ')}</p>
                <p><img src="${pokemon.imageUrl}" /></p>
            </div>
        </body>
        </html>
    `;
    const folderPath = join("./pokemon-data"); 
    await writeFile(join(folderPath, `${pokemon.name}.html`), html);
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
