export default function Loading() {
  return (
    <div>
      <p>Cargando...</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{ height: "100px", background: "#eee", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}
