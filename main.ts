import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { Pokemon, loadPokemons } from "./pokemon.js";
import { join } from "path";

async function generatePokemonHTML(pokemon: Pokemon) {
    let abilitiesWithEffects = "";
    for (const ability of pokemon.abilities) {
        const effect = await ability.effect;
        const capitalizedAbilityName =
            ability.name.charAt(0).toUpperCase() + ability.name.slice(1);
        abilitiesWithEffects += `<p><strong>${capitalizedAbilityName}:</strong> ${effect}</p>`;
    }

    const html = `
        <html>
        <head>
            <title>${pokemon.name}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-image: url('https://i.pinimg.com/564x/98/c1/5a/98c15a449a1166ec23f5c9f1f63995dd.jpg');
                    background-size: auto;
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
                    padding: 4em;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.8); 
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
                <p><strong>Type:</strong> ${pokemon.types.join(", ")}</p>
                <p><strong>Abilities:</strong><i>${abilitiesWithEffects}</i></p>
                <p><strong>Moves:</strong> ${pokemon.moves.join(", ")}</p>
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
    await writeFile("pokemons.html", html);

    for (const pokemon of pokemons) {
        await generatePokemonHTML(pokemon);
    }
}

main();
