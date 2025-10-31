import axios from "axios";

export type PokemonSummary = { name: string; url: string };

export async function fetchPokemons(limit: number, offset: number): Promise<PokemonSummary[]> {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results;
}

export async function fetchPokemonDetail(name: string) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
}
