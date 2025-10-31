"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { favoritesService } from "@/app/services/favorites.services";

export function useFavorites() {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: favoritesService.getAll,
  });
}

export function useAddFavorite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: favoritesService.add,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: favoritesService.remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });
}