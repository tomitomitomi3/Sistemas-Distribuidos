import axios from "axios";
import Link from "next/link";
import PokemonCard from "../components/PokemonCard"; 

export default async function HomePage() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=251");
  const pokemons = res.data.results; 

  return (
    <div>
      <h1>Pokedex Hoenn</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
        {pokemons.map((p: { name: string }) => (
          <Link key={p.name} href={`/pokemon/${p.name}`}>
            <PokemonCard name={p.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
