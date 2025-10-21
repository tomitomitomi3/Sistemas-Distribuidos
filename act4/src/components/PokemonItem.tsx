import { useState } from "react";

interface PokemonItemProps {
  name: string;
  url: string;
}

export default function PokemonItem({ name, url }: PokemonItemProps) {
  const [clicks, setClicks] = useState<number>(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button onClick={handleClick} style={{ display: "block", margin: "5px" }}>
      <strong>{name.toUpperCase()}</strong> - Usado: {clicks} veces
    </button>
  );
}
