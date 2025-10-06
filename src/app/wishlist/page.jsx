"use client";

import React, { useMemo } from "react";
import { useFavorites } from "@/components/providers/FavoritesProvider";
import { providersData } from "@/lib/providers";
import ProviderCard from "@/components/search/ProviderCard";

export default function WishlistPage() {
    const { favoriteIds, isHydrated } = useFavorites();

    const favoriteProviders = useMemo(() => {
        return providersData.filter((p) => favoriteIds.includes(p.id));
    }, [favoriteIds]);

    if (!isHydrated) return null;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
            {favoriteProviders.length === 0 ? (
                <p className="text-gray-600">No favorites yet. Tap the heart on any provider to add it here.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favoriteProviders.map((provider) => (
                        <ProviderCard key={provider.id} provider={provider} />
                    ))}
                </div>
            )}
        </div>
    );
}


