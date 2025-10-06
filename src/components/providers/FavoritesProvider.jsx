"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        try {
            const stored = typeof window !== "undefined" ? window.localStorage.getItem("favorites") : null;
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setFavoriteIds(parsed);
                }
            }
        } catch (_) {
            // ignore parse/storage errors
        } finally {
            setIsHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (!isHydrated) return;
        try {
            window.localStorage.setItem("favorites", JSON.stringify(favoriteIds));
        } catch (_) {
            // storage may be unavailable
        }
    }, [favoriteIds, isHydrated]);

    const toggleFavorite = (providerId) => {
        setFavoriteIds((prev) =>
            prev.includes(providerId) ? prev.filter((id) => id !== providerId) : [...prev, providerId]
        );
    };

    const isFavorite = (providerId) => favoriteIds.includes(providerId);

    const value = useMemo(
        () => ({ favoriteIds, toggleFavorite, isFavorite, isHydrated }),
        [favoriteIds, isHydrated]
    );

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
    return ctx;
}


