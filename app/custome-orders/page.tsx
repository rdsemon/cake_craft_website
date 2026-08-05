import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function CustomeOrders() {
  return (
    <section id="custom" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              label="Special Orders"
              title="Create Your Perfect Cake"
              description="Let our master pastry chefs design and create the cake of your dreams. From intimate celebrations to grand events, we bring your vision to life."
              centered={false}
            />
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Custom flavors and fillings
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Personalized designs and decorations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Dietary preferences accommodated
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-muted-foreground">
                  Professional delivery service
                </span>
              </li>
            </ul>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-lg">
              Request Custom Order
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎂</div>
                <p className="text-muted-foreground">
                  Your custom cake will shine here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
