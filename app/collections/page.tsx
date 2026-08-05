"use client";
import { CakeCard } from "@/components/cake-card";
import { SectionHeader } from "@/components/section-header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
const cakes = [
  {
    id: "vanilla-elegance",
    name: "Vanilla Elegance",
    description:
      "Classic vanilla cake with Italian meringue buttercream and edible gold leaf",
    image: "/cakes/vanilla-elegance.png",
    price: 45,
    badge: "Best Seller",
  },
  {
    id: "chocolate-bliss",
    name: "Chocolate Bliss",
    description:
      "Rich dark chocolate with ganache and fresh strawberry accents",
    image: "/cakes/chocolate-bliss.png",
    price: 48,
  },
  {
    id: "rose-garden",
    name: "Rose Garden",
    description:
      "Pistachio sponge with rose water cream and handpicked edible flowers",
    image: "/cakes/rose-garden.png",
    price: 52,
    badge: "New",
  },
  {
    id: "matcha-whisper",
    name: "Matcha Whisper",
    description:
      "Japanese matcha with white chocolate mousse and sesame brittle",
    image: "/cakes/matcha-whisper.png",
    price: 50,
  },
];

export default function Collections() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cakes.map((cake) => (
            <CakeCard
              key={cake.id}
              id={cake.id}
              name={cake.name}
              description={cake.description}
              image={cake.image}
              price={cake.price}
              badge={cake.badge}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
