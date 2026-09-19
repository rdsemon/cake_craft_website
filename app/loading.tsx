import { Navigation } from "@/components/navigation";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Skeleton */}
          <div className="mb-12 space-y-3">
            <div className="h-10 bg-muted rounded w-1/3 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
          </div>

          {/* Grid of Skeleton Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="space-y-4 animate-pulse">
                {/* Image Skeleton */}
                <div className="aspect-square bg-muted rounded-lg"></div>
                {/* Text Skeletons */}
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
