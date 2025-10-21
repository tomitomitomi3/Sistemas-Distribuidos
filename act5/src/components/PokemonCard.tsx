"use client";

export default function PokemonCard({ name }: { name: string }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
    >
      <p style={{ textTransform: "capitalize" }}>{name}</p>
    </div>
  );
}
