export function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="h-8 bg-muted rounded w-1/3"></div>

      {/* Content Skeletons */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex gap-4 p-4 border border-border rounded-lg"
          >
            {/* Image Skeleton */}
            <div className="w-20 h-20 bg-muted rounded flex-shrink-0"></div>

            {/* Text Skeletons */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-3 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
