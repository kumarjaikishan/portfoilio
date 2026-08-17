export default function Loader({ hidden }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center transition-all duration-700 ${
        hidden ? 'opacity-0 invisible pointer-events-none scale-105' : 'opacity-100 visible scale-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gold/15 blur-[90px] pointer-events-none animate-glow-pulse" />

      {/* Main Content Card */}
      <div className="relative flex flex-col items-center text-center px-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-text tracking-tight mb-2">
          Jai Kishan <span className="text-gradient-gold">Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-text/60 font-medium mb-8">
          Portfolio &bull; Full Stack Developer
        </p>

        {/* Animated Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-surface3 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gold-gradient rounded-full animate-[shimmer_2s_infinite]"
            style={{
              width: '100%',
              backgroundImage: 'linear-gradient(90deg, #f5a623 0%, #ffd482 50%, #f5a623 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
