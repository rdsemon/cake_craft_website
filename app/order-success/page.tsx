'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Copy } from 'lucide-react';

interface OrderData {
  id: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    pickupDate: string;
    specialRequests: string;
  };
  date: string;
}

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [order, setOrder] = useState<OrderData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (orderId) {
      const savedOrders = JSON.parse(localStorage.getItem('cake-shop-orders') || '[]');
      const foundOrder = savedOrders.find((o: OrderData) => o.id === orderId);
      if (foundOrder) {
        setOrder(foundOrder);
      }
    }
  }, [orderId]);

  const handleCopyOrderId = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const orderDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Success Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Thank you for your order. We&apos;ll start preparing your delicious cakes!
            </p>
          </div>

          {/* Order Details */}
          <div className="space-y-6">
            {/* Order Reference */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Order Reference
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
                    {order.id}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Order placed on {orderDate}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyOrderId}
                  className="w-full sm:w-auto"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy ID'}
                </Button>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Your Order
              </h2>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-3 border-b border-border last:border-b-0 last:pb-0">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
                <p className="font-semibold text-foreground">Total</p>
                <p className="text-xl font-bold text-primary">${order.total.toFixed(2)}</p>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pickup Date */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Pickup/Delivery Date
                </h3>
                <p className="text-lg font-semibold text-foreground">
                  {new Date(order.customer.pickupDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    {order.customer.firstName} {order.customer.lastName}
                  </p>
                  <p className="text-muted-foreground">{order.customer.email}</p>
                  <p className="text-muted-foreground">{order.customer.phone}</p>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card rounded-lg border border-border p-6 sm:col-span-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Delivery Address
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-foreground">{order.customer.address}</p>
                  <p className="text-foreground">
                    {order.customer.city}, {order.customer.state} {order.customer.zipCode}
                  </p>
                </div>
              </div>

              {/* Special Requests */}
              {order.customer.specialRequests && (
                <div className="bg-card rounded-lg border border-border p-6 sm:col-span-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Special Requests
                  </h3>
                  <p className="text-sm text-foreground whitespace-pre-wrap">
                    {order.customer.specialRequests}
                  </p>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground mb-2">Next Steps</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ We&apos;ll confirm your order via email shortly</li>
                <li>✓ Our team will prepare your delicious cakes with care</li>
                <li>✓ A reminder will be sent before your pickup/delivery date</li>
                <li>✓ Feel free to contact us if you have any questions!</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/#collections" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button size="lg" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
