export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public types: string[],
    public abilities: { name: string, effect: string }[],
    public moves: string[], 
    public imageUrl: string
  ) {}
}

export const loadPokemons = async (n: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`);
  const { results } = (await response.json()) as { results: any[] };
  const pokemons: Array<Pokemon> = [];
  
  for (const { name, url } of results) {
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();
    const id = pokemonData.id;
    const types = pokemonData.types.map((type: any) => type.type.name);
    const abilitiesData = await Promise.all(pokemonData.abilities.map(async (ability: any) => {
      const abilityData = await fetch(ability.ability.url + '?language=en').then(res => res.json());
      return {
        name: ability.ability.name,
        effect: abilityData.effect_entries.find((entry: any) => entry.language.name === 'en').effect
      };
    }));
    const moves = pokemonData.moves.map((move: any) => move.move.name); 
    const imageUrl = pokemonData.sprites.front_default;
    pokemons.push(new Pokemon(id, name, types, abilitiesData, moves, imageUrl)); 
  }
  return pokemons;
};
