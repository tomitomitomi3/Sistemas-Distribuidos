import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <nav>
            <Link href="/">Lista de Pkoémon</Link>
          </nav>
        </header>

        <main style={{ padding: "1rem" }}>{children}</main>

        <footer style={{ padding: "1rem", textAlign: "center", backgroundColor: "#f0f0f0" }}>
          <p>Texto de relleno: este es un texto muy interesante</p>
        </footer>
      </body>
    </html>
  );
}
