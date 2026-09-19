"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { CakeCard } from "@/components/cake-card";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useGetCakesQuery } from "@/services/cakeApi";
import { useCart } from "@/lib/cart-context";

export default function Collections() {
  const { isLoading, data, isError } = useGetCakesQuery();

  let cakes = data?.data ?? [];

  const { addItem } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <section id="collections" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            label="Our Collections"
            title="Signature Flavors"
            description="Each cake is a celebration of taste and artistry, made fresh to order with premium ingredients sourced from the finest suppliers."
          />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : isError ? (
            /* Error Fallback */
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Failed to load collections. Please try again later.
            </div>
          ) : cakes.length === 0 ? (
            /* Empty State Fallback */
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No cakes found in this collection.
            </div>
          ) : (
            /* Render Actual Content */
            cakes.map((cake) => (
              <CakeCard
                key={cake.id}
                id={cake.id}
                title={cake.title}
                description={cake.description}
                coverImage={cake.coverImage}
                price={cake.price}
                onAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href={"/"}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Back To Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
