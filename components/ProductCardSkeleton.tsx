export default function ProductCardSkeleton() {
  return (
    <div className="group flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4" />

      {/* Content Skeleton */}
      <div className="space-y-3 flex-1 flex flex-col">
        <div>
          {/* Title Line */}
          <div className="h-6 bg-muted rounded-md w-3/4 mb-2" />

          {/* Description Lines (Matching line-clamp-2) */}
          <div className="space-y-1.5 mt-1">
            <div className="h-4 bg-muted rounded-md w-full" />
            <div className="h-4 bg-muted rounded-md w-4/5" />
          </div>
        </div>

        {/* Footer Skeleton (Price + Button) */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          {/* Price */}
          <div className="h-6 bg-muted rounded-md w-16" />

          {/* Add to Cart Button */}
          <div className="h-9 bg-muted rounded-md w-16 sm:w-20" />
        </div>
      </div>
    </div>
  );
}
