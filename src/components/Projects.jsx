"use client";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "แพลตฟอร์มอีคอมเมิร์ซที่ครบครัน รองรับการชำระเงินหลายช่องทาง ระบบจัดการสินค้าคงคลัง และ Dashboard สำหรับ Admin",
      image: "🛒",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["ระบบตะกร้าสินค้า", "ชำระเงินออนไลน์", "ระบบจัดการออเดอร์", "Dashboard Admin"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "แอปพลิเคชันจัดการงานแบบ Real-time รองรับการทำงานเป็นทีม มี Kanban Board และการแจ้งเตือนอัตโนมัติ",
      image: "📋",
      category: "fullstack",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Kanban Board", "Real-time Sync", "Team Collaboration", "Push Notifications"],
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "แอปแชทบอทอัจฉริยะที่ใช้ AI ในการตอบคำถาม รองรับหลายภาษา และสามารถ Customize ได้ตามต้องการ",
      image: "🤖",
      category: "ai",
      tags: ["Python", "OpenAI API", "FastAPI", "React"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["AI Chatbot", "Multi-language", "Custom Training", "Analytics Dashboard"],
    },
    {
      id: 4,
      title: "Restaurant POS System",
      description: "ระบบ POS สำหรับร้านอาหาร รองรับการจัดการโต๊ะ ออเดอร์ และรายงานยอดขายแบบ Real-time",
      image: "🍽️",
      category: "fullstack",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["จัดการโต๊ะ", "ระบบออเดอร์", "รายงานยอดขาย", "พิมพ์ใบเสร็จ"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "เว็บไซต์ Portfolio ที่สวยงาม รองรับ Dark Mode และมี Animation ที่น่าสนใจ",
      image: "💼",
      category: "frontend",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Responsive Design", "Dark Mode", "Smooth Animations", "SEO Optimized"],
    },
    {
      id: 6,
      title: "Crypto Dashboard",
      description: "Dashboard สำหรับติดตามราคา Cryptocurrency แบบ Real-time พร้อมกราฟและการวิเคราะห์",
      image: "📊",
      category: "frontend",
      tags: ["React", "Chart.js", "CoinGecko API", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Price", "Interactive Charts", "Portfolio Tracking", "Price Alerts"],
    },
    {
      id: 7,
      title: "Learning Management System",
      description: "ระบบจัดการการเรียนการสอนออนไลน์ รองรับ Video Course, Quiz และ Certificate",
      image: "📚",
      category: "fullstack",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Video Streaming", "Quiz System", "Progress Tracking", "Certificate Generation"],
    },
    {
      id: 8,
      title: "Image Recognition API",
      description: "API สำหรับจดจำภาพด้วย Machine Learning รองรับการตรวจจับวัตถุและใบหน้า",
      image: "🔍",
      category: "ai",
      tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Object Detection", "Face Recognition", "Image Classification", "REST API"],
    },
  ];

  const categories = [
    { id: "all", name: "ทั้งหมด" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "ai", name: "AI/ML" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">ผลงานของผม</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            โปรเจคที่ผมได้พัฒนาและภาคภูมิใจ
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-[#1e293b] text-gray-300 hover:bg-[#2d3a4f]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e293b] rounded-2xl overflow-hidden border border-[#334155] card-hover group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    title="Live Demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="text-sm text-gray-500 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-500 rounded-full text-blue-400 font-medium hover:bg-blue-500/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            ดูโปรเจคเพิ่มเติมบน GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
