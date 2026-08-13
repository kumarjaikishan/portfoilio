export default function Toast({ message, visible, onClose }) {
  return (
    <div
      className={`fixed top-6 right-6 z-[9999] min-w-[240px] max-w-[350px] rounded-lg bg-emerald-600 text-white shadow-lg px-4 py-3 flex items-start gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <span className="text-sm flex-1">{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white text-lg leading-none">
        &times;
      </button>
    </div>
  )
}
