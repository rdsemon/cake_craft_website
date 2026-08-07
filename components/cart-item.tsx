'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as ICartItem } from '@/lib/cart-context';

interface CartItemProps {
  item: ICartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-border last:border-b-0">
      {/* Image */}
      <div className="relative w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 96px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        </div>

        {/* Price and Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
          <div className="text-lg font-semibold text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="h-8 w-8 p-0 hover:bg-secondary"
              >
                <Minus className="w-4 h-4" />
              </Button>

              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="h-8 w-8 p-0 hover:bg-secondary"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
