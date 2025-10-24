"use client";

import Link from "next/link";

export default function PokemonCard({ name }: { name: string }) {
  return (
    <Link href={`/pokemon/${name}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          textAlign: "center",
          cursor: "pointer",
          background: "#fdfdfd",
          transition: "0.2s",
        }}
      >
        <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>{name}</p>
      </div>
    </Link>
  );
}
