import axios from "axios";
import Link from "next/link";
import { fetchPokemonDetail } from "@/app/services/pokeapi";


type Props = {
  params: { name: string };
};

export default async function PokemonDetail( props : Props) {
  const name = props.params.name;

  const pokemon = await fetchPokemonDetail(name);

  const image =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default ||
    "/placeholder.png";

  return (
    <div style={styles.container}>
      <Link href="/" style={styles.backLink}>
        Volver a la lista
      </Link>

      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img src={image} alt={pokemon.name} style={styles.image} />
        </div>

        <div style={styles.info}>
          <h1 style={styles.title}>{pokemon.name}</h1>

          <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t: any) => t.type.name).join(", ")}
          </p>

          <p>
            <strong>Peso:</strong> {pokemon.weight / 10} kg
          </p>

          <p>
            <strong>Altura:</strong> {pokemon.height / 10} m
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-block",
    marginBottom: "1rem",
    textDecoration: "none",
    color: "#0070f3",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "2rem",
    gap: "2rem",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },
  imageContainer: {
    flex: "1 1 200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
  },
  info: {
    flex: "2 1 400px",
  },
  title: {
    textTransform: "capitalize",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  stats: {
    marginTop: "1rem",
  },
  statRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    gap: "0.5rem",
  },
  statName: {
    width: "100px",
    textTransform: "capitalize",
  },
  statBarBackground: {
    flex: 1,
    height: "10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
  },
  statBar: {
    height: "10px",
    backgroundColor: "#4caf50",
    borderRadius: "5px",
  },
  statValue: {
    width: "40px",
    textAlign: "right",
  },
};

