interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl text-balance mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
