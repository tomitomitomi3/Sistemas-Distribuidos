"use client";

import { useState } from "react";
import { usePokemons } from "./hooks/usePokemons";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const [page, setPage] = useState(0);
  const limit = 20;
  const offset = page * limit+251;

  const { data, isLoading, error } = usePokemons(limit, offset);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar</p>;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
        {data?.map((p) => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
