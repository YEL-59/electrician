"use client";

import { useEffect, useState } from "react";
import LenisProvider from "../providers/LenisProvider";
import { FavoritesProvider } from "../providers/FavoritesProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  // Wait until client-side mount to render interactive content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <LenisProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col pt-32">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </FavoritesProvider>
    </LenisProvider>
  );
}
