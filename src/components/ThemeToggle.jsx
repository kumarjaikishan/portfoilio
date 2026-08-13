export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center h-8 w-16 rounded-full border transition-colors duration-500 shrink-0 ${
        isDark
          ? 'bg-surface2 border-border-c/20'
          : 'bg-gold-gradient border-gold/40'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Track icons */}
      <i
        className="fa fa-moon-o absolute left-[7px] text-[11px] text-nebula-soft"
        aria-hidden="true"
      ></i>
      <i
        className="fa fa-sun-o absolute right-[7px] text-[12px] text-inkfixed/70"
        aria-hidden="true"
      ></i>

      {/* Knob */}
      <span
        className={`absolute top-[3px] h-[22px] w-[22px] rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-500 ease-out ${
          isDark ? 'translate-x-[6px]' : 'translate-x-[38px]'
        }`}
      >
        <i
          className={`fa ${isDark ? 'fa-moon-o text-nebula' : 'fa-sun-o text-gold-dark'} text-[11px]`}
          aria-hidden="true"
        ></i>
      </span>
    </button>
  )
}
