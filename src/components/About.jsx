import SectionHeader from './SectionHeader.jsx'

const skills = [
  { label: 'React.js', value: 90 },
  { label: 'Node.js & Express.js', value: 85 },
  { label: 'MongoDB & MySQL', value: 80 },
  { label: 'JavaScript (ES6+)', value: 85 },
  { label: 'HTML5, CSS3, MUI, Tailwind', value: 90 },
  { label: 'Git, AWS EC2, Nginx, Cloudinary', value: 80 },
]

const infoRows = [
  ['Profile', 'Full-Stack MERN Developer'],
  ['Domain', 'Web Development, SaaS Applications, Cloud Deployment'],
  ['Education', 'Bachelor of Commerce'],
  ['Language', 'English, Hindi'],
  ['Frontend', 'React.js, Redux, JavaScript (ES6+), HTML5, CSS3, MUI, Tailwind CSS'],
  ['Backend', 'Node.js, Express.js, PHP'],
  ['Database', 'MongoDB, MySQL'],
  ['Tools & DevOps', 'Git, AWS EC2, Nginx, Cloudinary, JWT'],
  ['Interest', 'Coding, Exploring New Technologies'],
]

export default function About() {
  return (
    <section id="about-section" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: photo + skills */}
        <div className="reveal lg:col-span-5">
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gold-gradient p-1 overflow-hidden flex-shrink-0 shadow-lg shadow-gold/20">
              <img
                src="https://res.cloudinary.com/dusxlxlvm/image/upload/v1761292180/personal/Pi7_Passport_Photo-Picsart-AiImageEnhancer_mst1bl.webp"
                alt="Jai Kishan Kumar - MERN Developer Profile Photo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full text-sm sm:text-base text-text/80 space-y-2 pt-2">
              <div className="flex items-start">
                <span className="font-semibold text-text w-28 shrink-0 flex justify-between pr-2">Name <span>:</span></span>
                <span className="text-text/70">Jai Kishan Kumar</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-text w-28 shrink-0 flex justify-between pr-2">Job Role <span>:</span></span>
                <span className="text-text/70">MERN Developer</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-text w-28 shrink-0 flex justify-between pr-2">Experience <span>:</span></span>
                <span className="text-text/70 leading-normal">Fresher (Project Experience)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-text w-28 shrink-0 flex justify-between pr-2">Address <span>:</span></span>
                <span className="text-text/70">Bihar, India</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-text/80 mb-6">Skills</h3>
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm sm:text-base font-medium mb-2 text-text/90">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="w-full h-2.5 bg-surface3 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gold-gradient rounded-full"
                    style={{ width: `${s.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: about text + details */}
        <div className="reveal lg:col-span-7 pt-2">
          {/* Watermark Section Heading */}
          <SectionHeader title="About Me" watermark="About" align="left" />

          <p className="text-text/70 text-base sm:text-lg leading-relaxed mb-8">
            Full-Stack MERN Web Developer passionate about building scalable, high-performance web
            applications. Skilled in both front-end and back-end development and cloud-deployed
            solutions.
          </p>

          <div className="space-y-3.5 text-sm sm:text-base w-full">
            {infoRows.map(([label, value]) => (
              <div className="flex items-start gap-2 w-full" key={label}>
                <span className="font-bold text-text w-32 sm:w-44 shrink-0 flex justify-between pr-1">
                  {label} <span>:</span>
                </span>
                <span className="text-text/70 leading-normal break-words flex-1">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
