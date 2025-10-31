"use client";

import Link from "next/link";
import { useAddFavorite, useRemoveFavorite, useFavorites } from "@/app/hooks/useFavorites";
import { lazy, useEffect, useState } from "react";
import { fetchPokemonDetail } from "@/app/services/pokeapi";

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  const { data: favorites = [] } = useFavorites();
  const addMutation = useAddFavorite();
  const removeMutation = useRemoveFavorite();
  const [sprite, setSprite] = useState<string | null>(null);

  const isFavorite = favorites?.some((f) => f.name === name);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (isFavorite) {
      const fav = favorites.find((f) => f.name === name);
      if (fav) removeMutation.mutate(fav.id);
    } else {
      addMutation.mutate(name);
    }
  };

useEffect(() => {
  fetchPokemonDetail(name).then((data) => {
    let spriteUrl = data.sprites.front_default;
    if (!spriteUrl && data.sprites.other?.["official-artwork"]?.front_default) {//esto es por si no hay un sprite
      spriteUrl = data.sprites.other["official-artwork"].front_default;
    }
    setSprite(spriteUrl || null);
  });
}, [name]);


  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#fff",
      }}
    >
    {sprite ? (
      <img
        src={sprite}
        alt={name}
        loading="lazy"
        style={{ position: "absolute", top: "8px", right: "8px", width: "50px", height: "50px" }}
      />
    ) : (
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "50px",
          height: "50px",
          backgroundColor: "#eee",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          color: "#999",
        }}
      >
        ?
      </div>
    )}


      <Link href={`/pokemon/${name}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h3
          style={{
            textTransform: "capitalize",
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </h3>
      </Link>

      <button
        onClick={handleToggleFavorite}
        disabled={addMutation.isPending || removeMutation.isPending}
        style={{
          marginTop: "0.5rem",
          padding: "0.4rem 0.8rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: isFavorite ? "#f44336" : "#ffd700",
          color: isFavorite ? "#fff" : "#000",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        {addMutation.isPending || removeMutation.isPending
          ? "Procesando..."
          : isFavorite
          ? "Quitar"
          : "⭐ Agregar"}
      </button>

      {(addMutation.isError || removeMutation.isError) && (
        <p style={{ color: "red", marginTop: "0.5rem" }}>Error al actualizar favoritos</p>
      )}
    </div>
  );
}
