"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      key: "frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      key: "backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 80 },
        { name: "PHP Laravel", level: 75 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      key: "database",
      icon: "☁️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      key: "tools",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Jest/Testing", level: 75 },
        { name: "CI/CD", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155] card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{t.skills.categories[category.key]}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0f172a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">{t.skills.otherTech}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Delphi",
              "Flutter",
              "Android",
              "Mantine",
              "Zustand",
              "Prisma",
              "Mongoose",
              "Socket.io",
              "Redis",
              "Nginx",
              "Linux",
              "REST API",
              "Webpack",
              "Vite",
              "SASS",
              "Framer Motion",
              "ESP32",
              "FastAPI",
              "Line OA",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-[#1e293b] border border-[#334155] rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
