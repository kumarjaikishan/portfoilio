import SectionHeader from './SectionHeader.jsx'

const projects = [
  {
    accent: 'gold',
    name: 'Battlefiesta',
    link: 'https://battlefiesta.in',
    tagline: 'Esport Tournaments Manager',
    description:
      'An Esports Tournament Manager platform to create, host, and manage tournaments for games like PUBG, BGMI, and Free Fire. Includes secure user authentication, admin controls, and automated ranking and statistics management.',
    tech: ['React.js', 'Express.js', 'Redux Toolkit', 'Cloudinary', 'MongoDB', 'Node.js', 'JWT', 'Firebase'],
    image:
      'https://res.cloudinary.com/dusxlxlvm/image/upload/v1710500405/battlefiesta/assets/Screenshot_2024-03-15_162648_ohnlc2.webp',
  },
  {
    accent: 'teal',
    name: 'Accusoft',
    link: 'https://accusoft.battlefiesta.in',
    tagline: 'Expense Management App',
    description:
      'A full-featured Expense Management System built using the MERN stack that allows users to record, track, and manage expenses effortlessly. Includes secure JWT-based authentication and detailed spending reports. The application features a responsive UI with React.js and MUI, and is deployed on AWS EC2 with Nginx for optimized performance.',
    tech: ['React.js', 'Express.js', 'Redux Toolkit', 'Cloudinary', 'MongoDB', 'Node.js', 'JWT'],
    image:
      'https://res.cloudinary.com/dusxlxlvm/image/upload/v1771659348/accusoft/assets/accusoft_xbibdq.webp',
  },
  {
    accent: 'gold',
    name: 'EMS',
    link: 'https://office.battlefiesta.in',
    tagline: 'Employee Management System',
    description:
      'A multi-tenant MERN stack application for managing employee attendance across organizations, featuring role and attribute-based access control (RBAC & ABAC), with real-time analytics and reporting for HR and management.',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Cloudinary', 'Redux Toolkit', 'JWT'],
    image:
      'https://res.cloudinary.com/dusxlxlvm/image/upload/v1761295468/personal/Screenshot_2025-10-24_141228_coeqyb.webp',
  },
]

function ProjectRow({ project, index, onCopy }) {
  const accentText = project.accent === 'gold' ? 'text-gold' : 'text-teal'
  const accentBorder = project.accent === 'gold' ? 'border-gold' : 'border-teal'
  const accentBg = project.accent === 'gold' ? 'bg-gold' : 'bg-teal'
  const reversed = index % 2 === 1

  const info = (
    <div className="w-full md:w-1/2 px-0 md:px-8">
      <h3 className={`text-2xl font-bold ${accentText} flex items-center gap-2`}>
        {project.name}
        <a href={project.link} target="_blank" rel="noreferrer" className="text-base">
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </a>
      </h3>
      <i className={`block mt-1 text-sm ${accentText}`}>{project.tagline}</i>
      <p className="text-text/70 mt-3 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs tracking-wide border border-border-c/20 text-text/70 rounded-full px-3 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 text-xs text-text/60 space-y-1">
        <p className="flex items-center gap-2">
          demo Id :- demo@gmail.com
          <i
            onClick={() => onCopy('demo@gmail.com')}
            className="fa fa-clone cursor-pointer hover:text-gold transition-colors"
            aria-hidden="true"
          ></i>
        </p>
        <p className="flex items-center gap-2">
          password :- demo
          <i
            onClick={() => onCopy('demo')}
            className="fa fa-clone cursor-pointer hover:text-gold transition-colors"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </div>
  )

  const image = (
    <div className="relative z-20 w-full md:w-1/2 px-0 md:px-8">
      <a href={project.link} target="_blank" rel="noreferrer" className="block relative z-20 bg-bg rounded-lg">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full rounded-lg border-2 ${accentBorder} transition-transform duration-300 hover:scale-[1.02] relative z-20 bg-bg`}
        />
      </a>
    </div>
  )

  return (
    <div className={`reveal relative flex flex-col md:flex-row items-center gap-6 py-14 ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Ring Indicator Dot */}
      <span
        className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-4 ${accentBorder} bg-bg z-30 shadow-lg`}
      ></span>

      {/* Horizontal Connector Line extending behind project image */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] ${accentBg} z-0 ${
          reversed
            ? 'right-1/2 w-1/4'
            : 'left-1/2 w-1/4'
        }`}
      ></div>

      {info}
      {image}
    </div>
  )
}

export default function Projects({ onCopy }) {
  return (
    <section id="project-section" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          watermark="Projects"
          subtitle="Sample projects built using the MERN stack and related technologies."
          align="center"
        />

        <div className="relative mt-14">
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-text/20"></div>

          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} onCopy={onCopy} />
          ))}
        </div>
      </div>
    </section>
  )
}
