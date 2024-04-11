import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadPokemons } from "./pokemon.js";


const pokemons = await loadPokemons(100);
const html = render(pokemons);
await writeFile('pokemons.html', html);
