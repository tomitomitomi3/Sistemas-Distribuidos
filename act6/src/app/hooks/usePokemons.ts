import { useQuery } from "@tanstack/react-query";
import { fetchPokemons, PokemonSummary } from "../services/pokeapi";

export function usePokemons(limit: number, offset: number) {
  return useQuery<PokemonSummary[], Error>({
    queryKey: ["pokemons", limit, offset],
    queryFn: () => fetchPokemons(limit, offset),
    placeholderData: (prev) => prev, 
  });
}
