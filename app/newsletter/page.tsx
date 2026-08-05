import { Button } from "@/components/ui/button";
export default function NewsLatters() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to receive updates on new collections, special offers, and
          exclusive previews.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto rounded-lg">
            Subscribe
          </Button>
        </div>

        <p className="text-xs mt-4 opacity-75">
          We&apos;ll never share your email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
