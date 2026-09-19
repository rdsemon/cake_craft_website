"use client";

import FeaturedCakes from "@/components/FeaturedCakes";
import { Hero } from "@/components/hero";
import { useState } from "react";
import About from "./about/page";
import CustomeOrders from "./custome-orders/page";
import Features from "./features/page";
import NewsLatters from "./newsletter/page";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Cart Notification */}
      {showNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 sm:px-6 py-3 rounded-lg shadow-lg z-40 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm font-medium">Added to cart!</p>
        </div>
      )}

      {/* Hero Section */}
      <Hero
        title="Cake Craft Website"
        subtitle="Premium Handcrafted Cakes"
        description="Discover the art of fine cake making. Each creation is a masterpiece, crafted with the finest ingredients and passion for perfection."
        ctaLabel="Browse Collection"
        ctaLink="#collections"
      />

      {/* FeaturedCakes Section */}
      <FeaturedCakes />

      {/* Features Section */}
      <Features />

      {/* Custom Orders Section */}
      <CustomeOrders />

      {/* About Section */}
      <About />
      {/* Newsletter Section */}
      <NewsLatters />
    </div>
  );
}
