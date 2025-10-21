// pages/index.tsx
import PokemonList from "@/components/PokemonList";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokédex</h1>
      <PokemonList />
    </div>
  );
}
