const stats = [
  { value: '3+', label: 'Live Projects Shipped' },
  { value: '8+', label: 'Core Technologies' },
  { value: '100%', label: 'MERN Stack Focus' },
]

export default function Hero() {
  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent pt-8 pb-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center pointer-events-none">
        <div className="reveal pointer-events-auto">
          <span className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-gold text-sm sm:text-base font-bold mb-4">
            <span className="w-8 h-[2px] bg-gold rounded-full"></span>
            Hello!
          </span>
          <h1 className="mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.15]">
            I'm <span className="text-gradient-gold">Jai Kishan</span>
            <br />
            {/* <span className="text-gradient-gold">Kumar</span> */}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-text font-medium mb-3">
            A MERN Full-Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-lg mb-8 leading-relaxed">
            Building high-performance websites &amp; engaging digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/dev-kishan/"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kumarjaikishan"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              My Works
            </a>
          </div>

          <div className="flex flex-wrap gap-8 sm:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-gradient-gold">{s.value}</p>
                <p className="text-xs sm:text-sm text-text/60 mt-1 max-w-[9rem]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end pointer-events-auto relative">
          <img
            src="https://res.cloudinary.com/dusxlxlvm/image/upload/v1761291228/personal/Generated_Image_October_15_2025_-_9_12PM-Picsart-AiImageEnhancer_1_1_txq0c6.webp"
            alt="Jai Kishan Kumar - Full Stack MERN Developer"
            className="max-h-[640px] lg:max-h-[650px] w-auto object-contain drop-shadow-2xl scale-105"
          />
        </div>
      </div>

      {/* Vertical Social Links on Right Side */}
      <div className="pointer-events-auto absolute right-4 sm:right-8 lg:right-12 bottom-16 sm:bottom-18 z-20 flex flex-col gap-3 sm:gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/dev-kishan/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface/80 border border-border-c/15 backdrop-blur-md flex items-center justify-center text-text/80 hover:text-gold hover:border-gold hover:bg-surface hover:scale-110 transition-all duration-300 shadow-md"
        >
          <i className="fa fa-linkedin text-base sm:text-lg" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/kumarjaikishan"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface/80 border border-border-c/15 backdrop-blur-md flex items-center justify-center text-text/80 hover:text-gold hover:border-gold hover:bg-surface hover:scale-110 transition-all duration-300 shadow-md"
        >
          <i className="fa fa-github text-base sm:text-lg" aria-hidden="true"></i>
        </a>
      </div>

      <a
        href="#about-section"
        aria-label="Scroll to About section"
        className="pointer-events-auto hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text/50 hover:text-gold transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent"></span>
      </a>
    </section>
  )
}
