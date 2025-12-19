"use client";

export default function About() {
  const stats = [
    { number: "20+", label: "ปีประสบการณ์" },
    { number: "50+", label: "โปรเจคสำเร็จ" },
    { number: "30+", label: "ลูกค้าที่พอใจ" },
    { number: "100%", label: "ความทุ่มเท" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">เกี่ยวกับผม</span>
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
              Full Stack Developer & UI/UX Designer
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              สวัสดีครับ! ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานง่าย
              ผมมีประสบการณ์กว่า 20 ปีในการพัฒนาซอฟต์แวร์และแอปพลิเคชันด้วยเทคโนโลยีที่หลากหลาย
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              ผมเชี่ยวชาญในการใช้ Delphi, React, Next.js, Node.js, Flutter และเทคโนโลยีอื่นๆ อีกมากมาย
              เพื่อสร้างผลิตภัณฑ์ดิจิทัลที่มีคุณภาพสูง นอกจากนี้ผมยังเป็นผู้เชี่ยวชาญในการใช้งานและทำงานร่วมกับ AI
              ได้เป็นอย่างดี ผมเชื่อว่าการเขียนโค้ดที่ดีนั้นต้องควบคู่ไปกับการออกแบบที่สวยงามและประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
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
                ดาวน์โหลด Resume
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
