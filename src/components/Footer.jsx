export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-border-c/10 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-text/50 text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  )
}
