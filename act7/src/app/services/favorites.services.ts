import { Favorite } from "@/app/lib/database";

export const favoritesService = {
  getAll: async (): Promise<Favorite[]> => {
    const res = await fetch("/api/favorites");
    if (!res.ok) throw new Error("Error al obtener favoritos");
    return res.json();
  },

  add: async (name: string): Promise<Favorite> => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al agregar favorito");
    return data;
  },

    remove: async (id: number): Promise<void> => {
    const res = await fetch(`/api/favorites/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar favorito");
    },


};
