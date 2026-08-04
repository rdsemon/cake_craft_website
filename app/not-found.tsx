import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Search } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Artisan Pâtisserie',
  description: 'The page you&apos;re looking for doesn&apos;t exist. Return to our homepage.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Icon */}
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-6xl sm:text-7xl font-serif font-bold text-foreground mb-2">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Page Not Found
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              We couldn&apos;t find the delicious page you&apos;re looking for. It might have been moved or deleted. Let&apos;s get you back on track!
            </p>
          </div>

          {/* Suggestions */}
          <div className="bg-card rounded-lg border border-border p-6 sm:p-8 mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              You might want to try:
            </p>
            <ul className="space-y-2 text-sm text-foreground text-left">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span>Check the URL for spelling errors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span>Browse our collections for delicious cakes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span>Visit our homepage to get started</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/#collections">
              <Button size="lg" variant="outline">
                Browse Cakes
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
