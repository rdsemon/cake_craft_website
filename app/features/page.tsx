import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/section-header";
import { Clock, Gift, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            label="Why Choose Us"
            title="Quality & Excellence"
            description="We believe in delivering not just cakes, but unforgettable experiences."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Premium Ingredients"
            description="Only the finest European ingredients and organic products for authentic flavors and superior quality."
          />
          <FeatureCard
            icon={<Gift size={24} />}
            title="Custom Orders"
            description="Personalize your cake with custom designs, flavors, and sizes for your special celebrations."
          />
          <FeatureCard
            icon={<Clock size={24} />}
            title="Made Fresh"
            description="Each cake is baked fresh to order ensuring optimal taste and freshness delivered to your door."
          />
        </div>
      </div>
    </section>
  );
}
