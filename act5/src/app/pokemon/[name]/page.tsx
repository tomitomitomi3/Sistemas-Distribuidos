import axios from "axios";
import Link from "next/link";

type Props = {
  params: { name: string };
};

export default async function PokemonDetail({ params }: Props) {
  const { name } = params;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = res.data;

  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipos: {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>

      <Link href="/" style={{ marginTop: "1rem", display: "inline-block" }}>
        ← Volver a la lista
      </Link>
    </div>
  );
}
