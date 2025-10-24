"use client";

import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="es">
      <body>
        <QueryClientProvider client={queryClient}>
          <header style={{ padding: "1rem", backgroundColor: "#fbff00ff" }}>
            <nav>
              <Link href="/">Pokedex Hoenn</Link>
            </nav>
          </header>

          <main style={{ padding: "1rem" }}>{children}</main>

          <footer
            style={{
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <p>Texto de relleno: este es un texto muy interesante</p>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
