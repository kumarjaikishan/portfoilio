import SectionHeader from './SectionHeader.jsx'

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
        <div className="reveal text-center">
          <a
            href="https://raw.githubusercontent.com/kumarjaikishan/resume/main/Jai kishan Resume.pdf"
            download="Jai kishan Resume.pdf"
            className="btn-gold"
          >
            <i className="fa fa-cloud-download text-sm" aria-hidden="true"></i> DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  )
}
