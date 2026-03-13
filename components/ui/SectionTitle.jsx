import { cn } from '@/lib/utils'

export default function SectionTitle({
  heading,
  subheading,
  align = 'center',
  light = false,
  className,
}) {
  const alignClass = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-bold leading-tight',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl',
            light ? 'text-white/60' : 'text-slate-500'
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
