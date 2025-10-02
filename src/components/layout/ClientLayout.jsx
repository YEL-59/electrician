"use client";

import { useEffect, useState } from "react";
import LenisProvider from "../providers/LenisProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  // Wait for client mount before rendering interactive components
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <LenisProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
