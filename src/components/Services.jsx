import SectionHeader from './SectionHeader.jsx'

const services = [
  {
    icon: 'fa-code',
    title: 'Frontend Development',
    body: 'Responsive, accessible interfaces built with React, Redux Toolkit, Tailwind CSS and MUI — tuned for speed and polish.',
  },
  {
    icon: 'fa-server',
    title: 'Backend & APIs',
    body: 'Secure, well-structured REST APIs with Node.js and Express, JWT authentication, and clean role/attribute-based access control.',
  },
  {
    icon: 'fa-database',
    title: 'Database Design',
    body: 'Schema design and query optimisation across MongoDB and MySQL for applications that need to stay fast as they grow.',
  },
  {
    icon: 'fa-cloud-upload',
    title: 'Cloud Deployment',
    body: 'Shipping and hosting on AWS EC2 with Nginx, Cloudinary media pipelines, and dependable CI-friendly deployment workflows.',
  },
]

export default function Services() {
  return (
    <section id="services-section" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="What I Do"
          watermark="Services"
          subtitle="A quick look at where I add the most value across the full MERN stack."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal glass-card rounded-2xl p-7 hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center text-inkfixed text-xl mb-6 shadow-md shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                <i className={`fa ${s.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{s.title}</h3>
              <p className="text-text/65 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
