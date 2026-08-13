import SectionHeader from './SectionHeader.jsx'

const education = [
  {
    date: '2013-2016',
    title: 'Bachelor of Commerce',
    place: 'MAGADH UNIVERSITY,BODH GAYA, BIHAR',
    grade: 'Grade: First class distinction.',
  },
  {
    date: '2012-2013',
    title: 'Intermediate in Commerce',
    place: 'KISSAN COLLEGE, SOHSARAI, NALANDA',
    grade: 'Grade: First class distinction.',
  },
]

export default function Resume() {
  return (
    <section id="resume-section" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Resume"
          watermark="Resume"
          subtitle="Full-Stack MERN Developer with hands-on experience in building scalable web applications and deploying cloud-based solutions. Strong knowledge in JavaScript, React, Node.js, and database management (MongoDB, MySQL). Experienced in deploying applications using AWS (EC2, S3), Nginx, Cloudinary, and managing continuous deployment workflows."
          align="center"
        />

        {/* Download CV Button */}
        <div className="reveal text-center mb-16">
          <a
            href="https://raw.githubusercontent.com/kumarjaikishan/resume/main/Jai kishan Resume.pdf"
            download="Jai kishan Resume.pdf"
            className="btn-gold"
          >
            <i className="fa fa-cloud-download text-sm" aria-hidden="true"></i> DOWNLOAD CV
          </a>
        </div>

        {/* Education Section Title & Horizontal Line Divider */}
        <div className="reveal mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-text mb-6">
            Education
          </h3>
          <div className="w-full h-[2px] bg-gold/80"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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
