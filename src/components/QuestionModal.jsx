import { useState } from 'react'

export default function QuestionModal({ open, onClose, onSent }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    const body = `Hey Kishan,

You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message: ${message}
`

    setSending(true)
    try {
      const response = await fetch('https://battlefiesta.in/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'kumar.jaikishan4880@gmail.com', title: 'Portfolio contact', body }),
      })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      await response.json()

      setName('')
      setEmail('')
      setMessage('')
      onClose()
      onSent('Thank you! We will get back to you soon.')
    } catch (err) {
      console.error('Error sending message:', err.message)
      alert('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[1000] bg-bg/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-md bg-surface border border-border-c/10 rounded-xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gold text-2xl leading-none hover:text-gold-dark"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gold mb-5">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-bg border border-border-c/10 rounded-lg px-4 py-3 text-text placeholder-text/40 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-bg border border-border-c/10 rounded-lg px-4 py-3 text-text placeholder-text/40 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-bg border border-border-c/10 rounded-lg px-4 py-3 text-text placeholder-text/40 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="bg-gold-gradient text-inkfixed font-semibold rounded-lg py-3 hover:brightness-110 transition-all disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}
