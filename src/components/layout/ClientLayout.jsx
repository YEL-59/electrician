"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LenisProvider from "../providers/LenisProvider";
import { FavoritesProvider } from "../providers/FavoritesProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  // Wait until client-side mount to render interactive content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <FavoritesProvider>
          <div className="min-h-screen flex flex-col pt-32">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </FavoritesProvider>
      </LenisProvider>
    </QueryClientProvider>
  );
}
