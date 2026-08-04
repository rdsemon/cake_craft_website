'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartItem } from '@/components/cart-item';
import { CartSummary } from '@/components/cart-summary';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          {items.length === 0 ? (
            // Empty Cart State
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
              <div className="mb-6 p-4 sm:p-6 bg-muted rounded-full">
                <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Looks like you haven&apos;t added any delicious cakes yet. Browse our collection and find your favorite!
              </p>
              <Link href="/#collections">
                <Button size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            // Cart with Items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/#collections">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <CartSummary
                  subtotal={cartTotal}
                  itemCount={items.length}
                  showCheckoutButton={true}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
