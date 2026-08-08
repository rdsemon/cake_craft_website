import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CartSummaryProps {
  subtotal: number;
  tax?: number;
  shipping?: number;
  itemCount: number;
  showCheckoutButton?: boolean;
}

export function CartSummary({
  subtotal,
  tax = 0,
  shipping = 0,
  itemCount,
  showCheckoutButton = false,
}: CartSummaryProps) {
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-card rounded-lg border border-border p-4 sm:p-6">
      <h3 className="font-semibold text-lg text-foreground mb-4">Order Summary</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
          <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {tax > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
          </div>
        )}

        {shipping > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-foreground font-medium">${shipping.toFixed(2)}</span>
          </div>
        )}

        <div className="border-t border-border pt-3 flex justify-between">
          <span className="font-semibold text-foreground">Total</span>
          <span className="font-bold text-lg text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {showCheckoutButton && (
        <Link href="/checkout" className="w-full">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </div>
  );
}
