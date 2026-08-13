import SectionHeader from './SectionHeader.jsx'

const education = [
  {
    date: '2013-2016',
    title: 'Bachelor of Commerce',
    place: 'MAGADH UNIVERSITY, BODH GAYA, BIHAR',
    grade: 'Grade: First class distinction.',
  },
  {
    date: '2012-2013',
    title: 'Intermediate in Commerce',
    place: 'KISSAN COLLEGE, SOHSARAI, NALANDA',
    grade: 'Grade: First class distinction.',
  },
]

export default function Education() {
  return (
    <section id="education-section" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Education"
          watermark="Education"
          subtitle="My academic background and educational qualifications."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {education.map((e) => (
            <div
              key={e.title}
              className="reveal bg-surface border border-border-c/10 rounded-xl p-8 hover:border-gold/30 transition-colors"
            >
              <span className="block text-gold text-2xl sm:text-3xl font-extrabold mb-3">
                {e.date}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-text mb-2">{e.title}</h4>
              <span className="block text-text/50 text-xs font-semibold uppercase tracking-wider mb-6">
                {e.place}
              </span>
              <p className="text-text/60 text-sm leading-relaxed">{e.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
