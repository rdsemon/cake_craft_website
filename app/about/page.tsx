import { SectionHeader } from "@/components/section-header";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍🍳</div>
                <p className="text-muted-foreground">Our Master Pastry Chef</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              label="Our Story"
              title="Crafted with Passion"
              description="Founded in 2015, Artisan Pâtisserie began with a simple vision: to create extraordinary cakes that bring joy to every celebration."
              centered={false}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our master pastry chefs combine traditional French techniques with
              innovative flavors, spending years perfecting each recipe. We
              source only the finest ingredients from Europe to ensure
              uncompromising quality.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every cake tells a story. Whether it&apos;s a milestone birthday,
              a romantic anniversary, or a grand celebration, we&apos;re honored
              to be part of your special moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
