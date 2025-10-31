export default function Pagination({ page, setPage }: { page: number; setPage: (p: number) => void }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {page > 0 && <button onClick={() => setPage(page - 1)}>Anterior</button>}
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
}
