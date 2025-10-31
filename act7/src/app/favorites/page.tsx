"use client";

import { useFavorites } from "@/app/hooks/useFavorites";
import { useRemoveFavorite } from "@/app/hooks/useFavorites";

export default function FavoritesPage() {
  const { data, isLoading, error } = useFavorites();
  const removeMutation = useRemoveFavorite();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar favoritos</p>;

  return (
    <div>
      <h1>Favoritos</h1>
      {data?.map((fav) => (
        <div key={fav.id} style={{ marginBottom: "1rem" }}>
          <span>{fav.name}</span>
          <button onClick={() => removeMutation.mutate(fav.id)}>❌ Eliminar</button>
        </div>
      ))}
    </div>
  );
}
