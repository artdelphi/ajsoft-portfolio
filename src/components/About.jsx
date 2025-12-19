"use client";

export default function About() {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Satisfied Clients" },
    { number: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20" />
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse opacity-20" style={{ animationDelay: "0.5s" }} />

              {/* Main avatar container */}
              <div className="absolute inset-8 bg-[#1e293b] rounded-full flex items-center justify-center border-4 border-blue-500/50">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Senior Full Stack Developer & Solutions Architect
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              A passionate software engineer with over 20 years of experience in delivering
              high-quality enterprise solutions. I specialize in building scalable web applications,
              desktop software, and mobile apps that drive business success.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              My expertise spans Delphi, React, Next.js, Node.js, Flutter, and cutting-edge AI technologies.
              I leverage modern tools and AI-powered workflows to accelerate development and deliver
              exceptional results. I believe great software combines clean code, elegant design, and outstanding user experience.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Delphi", "React", "Next.js", "Flutter", "Node.js", "AI/ML", "PostgreSQL", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:opacity-90 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1e293b] rounded-2xl p-6 text-center border border-[#334155] card-hover"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
