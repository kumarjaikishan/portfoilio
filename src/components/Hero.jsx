const stats = [
  { value: '3+', label: 'Live Projects Shipped' },
  { value: '8+', label: 'Core Technologies' },
  { value: '100%', label: 'MERN Stack Focus' },
]

export default function Hero() {
  return (
    <section
      id="home-section"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-transparent pt-24 md:pt-20 pb-0"
    >
      {/* Single Soft Ambient Gold Highlight Shadow */}
      <div
        className="absolute -top-24 left-1/12 w-[32rem] h-[32rem] rounded-full bg-gold/10 blur-[140px] pointer-events-none -z-10 animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 lg:gap-12 items-end flex-1 pointer-events-none">
        <div className="reveal pointer-events-auto text-center md:text-left md:col-span-7 lg:col-span-7 pb-12 md:pb-16">
          {/* Mobile-only Circular Avatar Badge at the top */}
          <div className="md:hidden flex flex-col items-center justify-center mb-6">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-amber-400 relative flex items-center justify-center shadow-xl mb-4">
              <img
                src="https://res.cloudinary.com/dusxlxlvm/image/upload/v1761291228/personal/Generated_Image_October_15_2025_-_9_12PM-Picsart-AiImageEnhancer_1_1_txq0c6.webp"
                alt="Jai Kishan Kumar - Full Stack MERN Developer"
                className="w-full h-full object-cover object-top scale-[1.55] pt-2"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface2/90 border border-border-c/20 text-xs font-medium text-text/80 shadow-md backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for work
            </div>
          </div>

          <span className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-gold text-sm sm:text-base font-bold mb-4">
            <span className="w-8 h-[2px] bg-gold rounded-full"></span>
            Hello!
          </span>
          <h1 className="mb-4 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1]">
            I'm <span className="text-gradient-gold">Jai Kishan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text font-medium mb-4">
            A MERN Full-Stack Developer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text/80 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Bringing your <span className="text-shimmer font-semibold">business ideas &amp; dream projects to life</span> with high-performance web experiences.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
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

          <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-gold">{s.value}</p>
                <p className="text-xs sm:text-sm text-text/60 mt-1 max-w-[10rem] mx-auto md:mx-0">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop-only Hero Image Column (>= md) */}
        <div className="hidden md:flex justify-end items-end md:col-span-5 lg:col-span-5 pointer-events-auto relative leading-none">
          <img
            src="https://res.cloudinary.com/dusxlxlvm/image/upload/v1761291228/personal/Generated_Image_October_15_2025_-_9_12PM-Picsart-AiImageEnhancer_1_1_txq0c6.webp"
            alt="Jai Kishan Kumar - Full Stack MERN Developer"
            className="max-h-[640px] lg:max-h-[680px] xl:max-h-[720px] 2xl:max-h-[760px] w-auto object-contain drop-shadow-2xl scale-105 block origin-bottom transition-all duration-300 relative z-10"
          />
        </div>
      </div>

      {/* Vertical Social Links on Right Side */}
      <div className="pointer-events-auto absolute right-4 sm:right-8 lg:right-12 bottom-4 sm:bottom-18 z-20 flex flex-col gap-3 sm:gap-4 items-center">
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
        className="pointer-events-auto hidden sm:flex absolute bottom-1 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text/50 hover:text-gold transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent"></span>
      </a>
    </section>
  )
}
