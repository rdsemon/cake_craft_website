import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-lg border border-border/50 hover:border-accent/30 bg-card hover:bg-accent/5 transition-all duration-300">
      <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
        <div className="text-accent text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </div>
  )
}
