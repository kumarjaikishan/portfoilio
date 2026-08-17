export default function Toast({ message, type = 'success', visible, onClose }) {
  const isError = type === 'error'
  const isInfo = type === 'info'

  const iconClass = isError
    ? 'fa-exclamation-circle text-rose-400'
    : isInfo
    ? 'fa-info-circle text-sky-400'
    : 'fa-check-circle text-emerald-400'

  const borderClass = isError
    ? 'border-rose-500/30'
    : isInfo
    ? 'border-sky-500/30'
    : 'border-emerald-500/30'

  return (
    <div
      aria-live="assertive"
      className={`fixed top-6 right-6 z-[9999] min-w-[260px] max-w-[380px] rounded-xl bg-surface/95 border ${borderClass} text-text shadow-2xl backdrop-blur-md px-4 py-3.5 flex items-center gap-3 transition-all duration-300 transform ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-3 scale-95 pointer-events-none'
      }`}
    >
      <i className={`fa ${iconClass} text-lg shrink-0`} aria-hidden="true" />
      <span className="text-sm font-medium flex-1 leading-snug">{message}</span>
      <button
        onClick={onClose}
        className="text-text/50 hover:text-text text-lg leading-none p-1 transition-colors"
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  )
}
