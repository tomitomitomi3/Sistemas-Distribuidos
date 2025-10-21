"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=251");
        setPokemons(response.data.results);
      } catch (err) {
        setError("Error al cargar los Pokemons");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}
