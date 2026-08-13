export default function Loader({ hidden }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg flex items-center justify-center transition-opacity duration-500 ${
        hidden ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      }`}
    >
      <svg className="w-12 h-12 animate-loader-spin" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#333" />
        <circle
          className="animate-loader-dash"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="#f5a623"
        />
      </svg>
    </div>
  )
}
