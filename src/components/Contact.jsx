import SectionHeader from './SectionHeader.jsx'

const contactBoxes = [
  { icon: 'fa-map-signs', title: 'ADDRESS', body: <p>Bihar, India</p> },
  {
    icon: 'fa-phone',
    title: 'CONTACT NUMBER',
    body: (
      <p>
        <a href="tel://+918210539367" className="hover:text-gold transition-colors">+91 8210539367</a>
      </p>
    ),
  },
  {
    icon: 'fa-paper-plane',
    title: 'EMAIL ADDRESS',
    body: (
      <p>
        <a href="mailto:kumar.jaikishan0@gmail.com" className="hover:text-gold transition-colors break-all">
          kumar.jaikishan0@gmail.com
        </a>
      </p>
    ),
  },
  {
    icon: 'fa-globe',
    title: 'RESUME',
    body: (
      <p>
        <a
          href="https://raw.githubusercontent.com/kumarjaikishan/resume/main/Jai kishan Resume.pdf"
          className="hover:text-gold transition-colors"
        >
          Download CV
        </a>
      </p>
    ),
  },
]

const socials = [
  { icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/dev-kishan/' },
  { icon: 'fa-github', href: 'https://github.com/kumarjaikishan' },
  { icon: 'fa-facebook', href: 'https://www.facebook.com/Kumar.jaikishan/' },
  { icon: 'fa-instagram', href: 'https://www.instagram.com/its_kishan.002/' },
]

export default function Contact({ onOpenModal }) {
  return (
    <section id="contact-section" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Contact Me"
          watermark="Contact"
          subtitle="Reach out to me through any of the channels below or submit your query via the Google form."
          align="center"
        />

        {/* 4 Column Contact Icons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactBoxes.map((box) => (
            <div key={box.title} className="reveal text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-surface2/90 flex items-center justify-center mb-6 text-gold text-2xl sm:text-3xl border border-border-c/5 shadow-lg">
                <i className={`fa ${box.icon}`} aria-hidden="true"></i>
              </div>
              <h4 className="font-bold uppercase tracking-wider text-text text-sm sm:text-base mb-3">
                {box.title}
              </h4>
              <div className="text-text/70 text-sm sm:text-base">{box.body}</div>
            </div>
          ))}
        </div>

        {/* Question Prompt */}
        <div className="reveal text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-5">
            Have a <span className="text-gold">Question?</span>
          </h3>
          <button
            onClick={onOpenModal}
            className="btn-gold"
          >
            Click Here
          </button>
        </div>

        {/* Social Icons */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4 text-text/60">
          <span>Find me on</span>
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-surface border border-border-c/10 flex items-center justify-center hover:bg-gold hover:text-inkfixed hover:border-gold transition-colors"
            >
              <i className={`fa ${s.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
