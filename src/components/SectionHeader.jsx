// Reusable Section Header with centralized watermark styling
// Change watermark base size and top positioning here:
export const WATERMARK_BASE_CLASS =
  'absolute top-1 sm:top-5 text-5xl sm:text-6xl md:text-8xl font-extrabold text-text/10 select-none pointer-events-none leading-none z-0'

export default function SectionHeader({ title, watermark, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <div
      className={`reveal relative ${isCenter
        ? 'text-center flex flex-col items-center justify-center max-w-3xl mx-auto mb-14'
        : 'mb-8'
        }`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text relative z-10">
        {title}
      </h2>
      <span
        className={`block h-1 w-14 rounded-full bg-gold-gradient mt-4 relative z-10 ${
          isCenter ? 'mx-auto' : ''
        }`}
      ></span>
      <span
        className={`${WATERMARK_BASE_CLASS} ${isCenter ? 'left-1/2 -translate-x-1/2 whitespace-nowrap' : '-left-4'
          }`}
      >
        {watermark}
      </span>
      {subtitle && (
        <p className="text-text/60 mt-10 relative z-10 leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
