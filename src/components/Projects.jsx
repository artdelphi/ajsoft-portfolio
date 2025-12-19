"use client";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "ระบบนัดหมายคลินิก",
      description: "ระบบจัดการนัดหมายคลินิกครบวงจร รองรับการนัดหมาย จัดการคิว และประวัติผู้ป่วย",
      image: "🏥",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["จัดการนัดหมาย", "ระบบคิว", "ประวัติผู้ป่วย", "แจ้งเตือนอัตโนมัติ"],
    },
    {
      id: 2,
      title: "LINE Loyalty System",
      description: "ระบบสะสมคะแนนผ่าน Line Official Account รองรับการแลกของรางวัล และจัดการสมาชิก",
      image: "🎯",
      category: "fullstack",
      tags: ["Next.js", "Line OA", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["สะสมคะแนน", "แลกของรางวัล", "ระบบสมาชิก", "เชื่อมต่อ Line OA"],
    },
    {
      id: 3,
      title: "AI Workflow",
      description: "ระบบจัดการ Workflow อัจฉริยะที่ใช้ AI ช่วยในการวิเคราะห์และจัดการงาน",
      image: "🤖",
      category: "ai",
      tags: ["Next.js", "OpenAI API", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["AI Automation", "Workflow Management", "Analytics Dashboard", "Task Scheduling"],
    },
    {
      id: 4,
      title: "Medical Transcription App",
      description: "แอปถอดเสียงทางการแพทย์ ช่วยแพทย์บันทึกข้อมูลผู้ป่วยได้สะดวกและรวดเร็ว",
      image: "🎙️",
      category: "ai",
      tags: ["Next.js", "Speech-to-Text", "AI", "React"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["ถอดเสียงอัตโนมัติ", "รองรับภาษาไทย", "แก้ไขข้อความ", "Export รายงาน"],
    },
    {
      id: 5,
      title: "Meeting Room Booking System",
      description: "ระบบจองห้องประชุมออนไลน์ รองรับการจองล่วงหน้า และแสดงสถานะห้องประชุมแบบ Real-time",
      image: "🏢",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["จองห้องประชุม", "ปฏิทินรวม", "แจ้งเตือน", "รายงานการใช้งาน"],
    },
    {
      id: 6,
      title: "MobileHub",
      description: "แพลตฟอร์มรวมแอปพลิเคชันมือถือ รองรับการจัดการและเผยแพร่แอปภายในองค์กร",
      image: "📱",
      category: "mobile",
      tags: ["Flutter", "React Native", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["App Distribution", "Version Control", "Analytics", "User Management"],
    },
    {
      id: 7,
      title: "Pharmacy MedRep Booking",
      description: "ระบบจองนัดหมายตัวแทนยาสำหรับร้านขายยา ช่วยจัดการการเข้าพบและติดตามผล",
      image: "💊",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["จองนัดหมาย", "จัดการตัวแทน", "ประวัติการเข้าพบ", "รายงานสรุป"],
    },
    {
      id: 8,
      title: "QR Code Restaurant Order System",
      description: "ระบบสั่งอาหารผ่าน QR Code สำหรับร้านอาหาร ลดการสัมผัส เพิ่มความสะดวกให้ลูกค้า สแกน QR Code ที่โต๊ะเพื่อสั่งอาหารได้ทันที",
      image: "🍽️",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "Socket.io", "QR Code"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["สแกน QR Code สั่งอาหาร", "Real-time Order", "จัดการเมนู", "POS ครบวงจร"],
    },
    {
      id: 9,
      title: "Resort Rental Web",
      description: "เว็บไซต์จองที่พักรีสอร์ท รองรับการค้นหา จอง และชำระเงินออนไลน์",
      image: "🏖️",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["ค้นหาที่พัก", "จองออนไลน์", "ชำระเงิน", "รีวิวและคะแนน"],
    },
    {
      id: 10,
      title: "Project Tracking App",
      description: "แอปติดตามโปรเจค ช่วยจัดการงาน ติดตามความคืบหน้า และทำงานร่วมกับทีม",
      image: "📊",
      category: "fullstack",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["จัดการโปรเจค", "Kanban Board", "ติดตามความคืบหน้า", "แจ้งเตือนทีม"],
    },
    {
      id: 11,
      title: "RWBoost",
      description: "เครื่องมือเพิ่มประสิทธิภาพการอ่านเขียนข้อมูล ช่วยเพิ่มความเร็วในการทำงานกับไฟล์",
      image: "⚡",
      category: "desktop",
      tags: ["Delphi", "Windows", "Performance", "I/O Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["เพิ่มความเร็ว I/O", "Cache Management", "Monitoring", "Auto Optimization"],
    },
    {
      id: 12,
      title: "SanyaScan",
      description: "แอปสแกนเอกสารและ OCR รองรับการสแกนเอกสาร แปลงเป็นข้อความ และจัดเก็บ",
      image: "📄",
      category: "mobile",
      tags: ["Flutter", "OCR", "AI", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["สแกนเอกสาร", "OCR ภาษาไทย", "จัดเก็บ Cloud", "แชร์ไฟล์"],
    },
    {
      id: 13,
      title: "WebView4Delphi Integration",
      description: "การพัฒนาแอปพลิเคชัน Desktop ด้วย Delphi ที่ใช้ WebView สำหรับแสดงเนื้อหาเว็บ",
      image: "🖥️",
      category: "desktop",
      tags: ["Delphi", "WebView", "Chromium", "Windows"],
      liveUrl: "#",
      githubUrl: "https://github.com/artdelphi/WebView4Delphi",
      features: ["Desktop Application", "Web Integration", "Cross-platform UI", "Native Performance"],
    },
    {
      id: 14,
      title: "ESP32 MicroSD Server",
      description: "โปรเจค IoT สำหรับอ่าน/เขียนข้อมูลจาก MicroSD Card บน ESP32 พร้อม Web Server",
      image: "📡",
      category: "iot",
      tags: ["ESP32", "C++", "IoT", "MicroSD"],
      liveUrl: "#",
      githubUrl: "https://github.com/artdelphi/ESP32-microSD-server",
      features: ["อ่าน/เขียน SD Card", "Web Server", "Data Logging", "WiFi Control"],
    },
    {
      id: 15,
      title: "FastAPI MCP Server",
      description: "เซิร์ฟเวอร์ MCP (Model Context Protocol) สำหรับเชื่อมต่อ FastAPI กับ AI Models",
      image: "🔗",
      category: "ai",
      tags: ["FastAPI", "Python", "MCP", "AI"],
      liveUrl: "#",
      githubUrl: "https://github.com/artdelphi/fastapi_mcp",
      features: ["MCP Protocol", "API Endpoints", "Authentication", "AI Integration"],
    },
    {
      id: 16,
      title: "API อ่านบัตรประชาชน",
      description: "API สำหรับอ่านข้อมูลจากบัตรประชาชนไทย รองรับการอ่านผ่านเครื่องอ่านบัตร Smart Card",
      image: "💳",
      category: "desktop",
      tags: ["Delphi", "Smart Card", "REST API", "Windows"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["อ่านข้อมูลบัตร", "ดึงรูปภาพ", "REST API", "รองรับหลายเครื่องอ่าน"],
    },
    {
      id: 17,
      title: "Tracking App",
      description: "แอปติดตามตำแหน่งและสถานะแบบ Real-time สำหรับติดตามยานพาหนะ พนักงาน หรือสินค้า",
      image: "📍",
      category: "mobile",
      tags: ["Flutter", "Google Maps", "Firebase", "Real-time"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["ติดตามตำแหน่ง GPS", "Real-time Updates", "ประวัติการเดินทาง", "แจ้งเตือน Geofence"],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "desktop", name: "Desktop" },
    { id: "mobile", name: "Mobile" },
    { id: "iot", name: "IoT" },
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
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of projects I've delivered with excellence and dedication
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
      </div>
    </section>
  );
}
