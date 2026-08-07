import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaLabel?: string
  ctaLink?: string
  backgroundImage?: string
}

export function Hero({
  title,
  subtitle,
  description,
  ctaLabel = 'Explore Collection',
  ctaLink = '#collections',
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {subtitle && (
          <div className="mb-4 inline-block">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">
              {subtitle}
            </p>
          </div>
        )}

        <h1 className="mb-6 text-5xl md:text-7xl font-serif font-bold text-foreground text-balance leading-tight">
          {title}
        </h1>

        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          {description}
        </p>

        <a href={ctaLink}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-lg"
          >
            {ctaLabel}
          </Button>
        </a>
      </div>
    </section>
  )
}
