"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  th: {
    // Navbar
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      portfolio: "ผลงาน",
      contact: "ติดต่อ",
    },
    // Hero
    hero: {
      welcome: "ยินดีต้อนรับ ผมคือ",
      title: "AJ Software Dev",
      subtitle: "Full Stack Developer",
      description: "นักพัฒนาซอฟต์แวร์อาวุโสกว่า 20 ปี เชี่ยวชาญการพัฒนาระบบ Enterprise, Web Application, Desktop Application, Mobile App และ AI Integration",
      viewPortfolio: "ดูผลงาน",
      getInTouch: "ติดต่อ",
    },
    // About
    about: {
      title: "เกี่ยวกับผม",
      role: "Senior Full Stack Developer & Solutions Architect",
      description1: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์กว่า 20 ปี ในการส่งมอบระบบ Enterprise คุณภาพสูง เชี่ยวชาญการพัฒนา Web Application, Desktop Software และ Mobile App ที่ขับเคลื่อนความสำเร็จทางธุรกิจ",
      description2: "ความเชี่ยวชาญครอบคลุม Delphi, React, Next.js, Node.js, Flutter และเทคโนโลยี AI ล่าสุด ใช้เครื่องมือและ AI Workflow ที่ทันสมัยเพื่อเร่งการพัฒนาและส่งมอบผลลัพธ์ที่ยอดเยี่ยม",
      downloadResume: "ดาวน์โหลด Resume",
      stats: {
        experience: "ปีประสบการณ์",
        projects: "โปรเจคสำเร็จ",
        clients: "ลูกค้าพึงพอใจ",
        commitment: "ความมุ่งมั่น",
      },
    },
    // Skills
    skills: {
      title: "ทักษะของผม",
      subtitle: "เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนา",
      otherTech: "เทคโนโลยีอื่นๆ ที่ผมใช้",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        database: "Database & Cloud",
        tools: "Tools & Others",
      },
    },
    // Projects
    projects: {
      title: "ผลงาน",
      subtitle: "รวมผลงานที่ผ่านมาด้วยความตั้งใจและคุณภาพ",
      categories: {
        all: "ทั้งหมด",
        fullstack: "Full Stack",
        desktop: "Desktop",
        mobile: "Mobile",
        iot: "IoT",
        ai: "AI/ML",
      },
    },
    // Contact
    contact: {
      title: "ติดต่อ",
      subtitle: "มีโปรเจคในใจ? มาคุยกันว่าผมจะช่วยทำให้ไอเดียของคุณเป็นจริงได้อย่างไร",
      heading: "มาสร้างสิ่งดีๆ ด้วยกัน",
      description: "พร้อมรับงานฟรีแลนซ์ ที่ปรึกษา และงานประจำ ไม่ว่าจะเป็น Web App, Mobile App, Desktop Software หรือ AI Integration ผมพร้อมช่วยทำให้ไอเดียของคุณเป็นจริง",
      email: "อีเมล",
      phone: "โทรศัพท์",
      location: "ที่ตั้ง",
      locationValue: "กรุงเทพฯ, ประเทศไทย",
      connectWith: "ติดตามผม",
      sendMessage: "ส่งข้อความ",
      form: {
        name: "ชื่อ",
        namePlaceholder: "ชื่อของคุณ",
        email: "อีเมล",
        emailPlaceholder: "email@example.com",
        subject: "หัวข้อ",
        subjectPlaceholder: "สอบถามโปรเจค",
        message: "ข้อความ",
        messagePlaceholder: "เล่าเกี่ยวกับโปรเจคของคุณ...",
        send: "ส่งข้อความ",
        sending: "กำลังส่ง...",
        success: "ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อมา",
      },
    },
    // Footer
    footer: {
      navigation: "เมนู",
      services: "บริการ",
      connect: "ติดตาม",
      description: "นักพัฒนาซอฟต์แวร์อาวุโส เชี่ยวชาญระบบ Enterprise, Web App, Mobile App และ AI Integration",
      servicesList: {
        web: "พัฒนาเว็บไซต์",
        mobile: "พัฒนาแอปมือถือ",
        desktop: "พัฒนาโปรแกรม Desktop",
        ai: "AI Integration & Consulting",
      },
      copyright: "สงวนลิขสิทธิ์",
      designedBy: "ออกแบบและพัฒนาโดย",
    },
    // Project items
    projectItems: {
      clinic: {
        title: "ระบบนัดหมายคลินิก",
        description: "ระบบจัดการนัดหมายคลินิกครบวงจร รองรับการนัดหมาย จัดการคิว และประวัติผู้ป่วย",
        features: ["จัดการนัดหมาย", "ระบบคิว", "ประวัติผู้ป่วย", "แจ้งเตือนอัตโนมัติ"],
      },
      lineLoyalty: {
        title: "LINE Loyalty System",
        description: "ระบบสะสมคะแนนผ่าน Line Official Account รองรับการแลกของรางวัล และจัดการสมาชิก",
        features: ["สะสมคะแนน", "แลกของรางวัล", "ระบบสมาชิก", "เชื่อมต่อ Line OA"],
      },
      aiWorkflow: {
        title: "AI Workflow",
        description: "ระบบจัดการ Workflow อัจฉริยะที่ใช้ AI ช่วยในการวิเคราะห์และจัดการงาน",
        features: ["AI Automation", "Workflow Management", "Analytics Dashboard", "Task Scheduling"],
      },
      medicalTranscription: {
        title: "Medical Transcription App",
        description: "แอปถอดเสียงทางการแพทย์ ช่วยแพทย์บันทึกข้อมูลผู้ป่วยได้สะดวกและรวดเร็ว",
        features: ["ถอดเสียงอัตโนมัติ", "รองรับภาษาไทย", "แก้ไขข้อความ", "Export รายงาน"],
      },
      meetingRoom: {
        title: "Meeting Room Booking System",
        description: "ระบบจองห้องประชุมออนไลน์ รองรับการจองล่วงหน้า และแสดงสถานะห้องประชุมแบบ Real-time",
        features: ["จองห้องประชุม", "ปฏิทินรวม", "แจ้งเตือน", "รายงานการใช้งาน"],
      },
      mobileHub: {
        title: "MobileHub",
        description: "แพลตฟอร์มรวมแอปพลิเคชันมือถือ รองรับการจัดการและเผยแพร่แอปภายในองค์กร",
        features: ["App Distribution", "Version Control", "Analytics", "User Management"],
      },
      pharmacy: {
        title: "Pharmacy MedRep Booking",
        description: "ระบบจองนัดหมายตัวแทนยาสำหรับร้านขายยา ช่วยจัดการการเข้าพบและติดตามผล",
        features: ["จองนัดหมาย", "จัดการตัวแทน", "ประวัติการเข้าพบ", "รายงานสรุป"],
      },
      restaurant: {
        title: "QR Code Restaurant Order System",
        description: "ระบบสั่งอาหารผ่าน QR Code สำหรับร้านอาหาร ลดการสัมผัส เพิ่มความสะดวกให้ลูกค้า",
        features: ["สแกน QR Code สั่งอาหาร", "Real-time Order", "จัดการเมนู", "POS ครบวงจร"],
      },
      resort: {
        title: "Resort Rental Web",
        description: "เว็บไซต์จองที่พักรีสอร์ท รองรับการค้นหา จอง และชำระเงินออนไลน์",
        features: ["ค้นหาที่พัก", "จองออนไลน์", "ชำระเงิน", "รีวิวและคะแนน"],
      },
      projectTracking: {
        title: "Project Tracking App",
        description: "ระบบติดตามการทำงานของสมาชิกในโปรเจค ดูความคืบหน้างาน มอบหมายงาน และประเมินผลการทำงานของทีมแบบ Real-time",
        features: ["ติดตามสมาชิกในทีม", "มอบหมายงาน", "ดูความคืบหน้า", "รายงานประสิทธิภาพ"],
      },
      rwBoost: {
        title: "RWBoost",
        description: "ระบบ AI วิเคราะห์รหัสโรค ICD เพื่อเพิ่มประสิทธิภาพค่าน้ำหนักโรค DRG ช่วยโรงพยาบาลเบิกจ่ายได้ถูกต้องแม่นยำ",
        features: ["วิเคราะห์รหัสโรคด้วย AI", "เพิ่มค่าน้ำหนัก DRG", "ประมวลผลรหัส ICD", "Healthcare Analytics"],
      },
      sanyaScan: {
        title: "SanyaScan",
        description: "แอปสแกนเอกสารและ OCR รองรับการสแกนเอกสาร แปลงเป็นข้อความ และจัดเก็บ",
        features: ["สแกนเอกสาร", "OCR ภาษาไทย", "จัดเก็บ Cloud", "แชร์ไฟล์"],
      },
      webView4Delphi: {
        title: "WebView4Delphi Integration",
        description: "การพัฒนาแอปพลิเคชัน Desktop ด้วย Delphi ที่ใช้ WebView สำหรับแสดงเนื้อหาเว็บ",
        features: ["Desktop Application", "Web Integration", "Cross-platform UI", "Native Performance"],
      },
      esp32: {
        title: "ESP32 MicroSD Server",
        description: "โปรเจค IoT สำหรับอ่าน/เขียนข้อมูลจาก MicroSD Card บน ESP32 พร้อม Web Server",
        features: ["อ่าน/เขียน SD Card", "Web Server", "Data Logging", "WiFi Control"],
      },
      fastApiMcp: {
        title: "FastAPI MCP Server",
        description: "เซิร์ฟเวอร์ MCP (Model Context Protocol) สำหรับเชื่อมต่อ FastAPI กับ AI Models",
        features: ["MCP Protocol", "API Endpoints", "Authentication", "AI Integration"],
      },
      thaiIdCard: {
        title: "API อ่านบัตรประชาชน",
        description: "API สำหรับอ่านข้อมูลจากบัตรประชาชนไทย รองรับการอ่านผ่านเครื่องอ่านบัตร Smart Card",
        features: ["อ่านข้อมูลบัตร", "ดึงรูปภาพ", "REST API", "รองรับหลายเครื่องอ่าน"],
      },
      trackingApp: {
        title: "Tracking App",
        description: "แอปติดตามตำแหน่งและสถานะแบบ Real-time สำหรับติดตามยานพาหนะ พนักงาน หรือสินค้า",
        features: ["ติดตามตำแหน่ง GPS", "Real-time Updates", "ประวัติการเดินทาง", "แจ้งเตือน Geofence"],
      },
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    // Hero
    hero: {
      welcome: "Welcome, I'm",
      title: "AJ Software Dev",
      subtitle: "Full Stack Developer",
      description: "Senior Software Developer with 20+ years of experience delivering enterprise solutions. Specializing in Full Stack Development, Desktop Applications, Mobile Apps, and AI Integration.",
      viewPortfolio: "View Portfolio",
      getInTouch: "Get In Touch",
    },
    // About
    about: {
      title: "About Me",
      role: "Senior Full Stack Developer & Solutions Architect",
      description1: "A passionate software engineer with over 20 years of experience in delivering high-quality enterprise solutions. I specialize in building scalable web applications, desktop software, and mobile apps that drive business success.",
      description2: "My expertise spans Delphi, React, Next.js, Node.js, Flutter, and cutting-edge AI technologies. I leverage modern tools and AI-powered workflows to accelerate development and deliver exceptional results.",
      downloadResume: "Download Resume",
      stats: {
        experience: "Years Experience",
        projects: "Projects Delivered",
        clients: "Satisfied Clients",
        commitment: "Commitment",
      },
    },
    // Skills
    skills: {
      title: "My Skills",
      subtitle: "Technologies and tools I use for development",
      otherTech: "Other Technologies I Use",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        database: "Database & Cloud",
        tools: "Tools & Others",
      },
    },
    // Projects
    projects: {
      title: "Portfolio",
      subtitle: "A showcase of projects I've delivered with excellence and dedication",
      categories: {
        all: "All Projects",
        fullstack: "Full Stack",
        desktop: "Desktop",
        mobile: "Mobile",
        iot: "IoT",
        ai: "AI/ML",
      },
    },
    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? Let's discuss how I can help bring your vision to life.",
      heading: "Let's Build Something Great",
      description: "I'm available for freelance projects, consulting, and full-time opportunities. Whether you need a web application, mobile app, desktop software, or AI integration, I'm here to help turn your ideas into reality.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Bangkok, Thailand",
      connectWith: "Connect With Me",
      sendMessage: "Send a Message",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "email@example.com",
        subject: "Subject",
        subjectPlaceholder: "Project inquiry",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! Thank you for reaching out.",
      },
    },
    // Footer
    footer: {
      navigation: "Navigation",
      services: "Services",
      connect: "Connect",
      description: "Senior Software Developer specializing in enterprise solutions, web applications, mobile apps, and AI integration.",
      servicesList: {
        web: "Web Development",
        mobile: "Mobile App Development",
        desktop: "Desktop Applications",
        ai: "AI Integration & Consulting",
      },
      copyright: "All rights reserved",
      designedBy: "Designed & Developed by",
    },
    // Project items
    projectItems: {
      clinic: {
        title: "Clinic Appointment System",
        description: "Complete clinic appointment management system with scheduling, queue management, and patient history",
        features: ["Appointment Management", "Queue System", "Patient History", "Auto Notifications"],
      },
      lineLoyalty: {
        title: "LINE Loyalty System",
        description: "Points collection system via Line Official Account with rewards redemption and member management",
        features: ["Points Collection", "Rewards Redemption", "Membership System", "Line OA Integration"],
      },
      aiWorkflow: {
        title: "AI Workflow",
        description: "Intelligent workflow management system using AI for analysis and task management",
        features: ["AI Automation", "Workflow Management", "Analytics Dashboard", "Task Scheduling"],
      },
      medicalTranscription: {
        title: "Medical Transcription App",
        description: "Medical transcription app helping doctors record patient information quickly and conveniently",
        features: ["Auto Transcription", "Thai Language Support", "Text Editing", "Report Export"],
      },
      meetingRoom: {
        title: "Meeting Room Booking System",
        description: "Online meeting room booking system with advance booking and real-time room status display",
        features: ["Room Booking", "Shared Calendar", "Notifications", "Usage Reports"],
      },
      mobileHub: {
        title: "MobileHub",
        description: "Mobile application hub platform for managing and distributing internal enterprise apps",
        features: ["App Distribution", "Version Control", "Analytics", "User Management"],
      },
      pharmacy: {
        title: "Pharmacy MedRep Booking",
        description: "Medical representative booking system for pharmacies to manage visits and follow-ups",
        features: ["Appointment Booking", "Rep Management", "Visit History", "Summary Reports"],
      },
      restaurant: {
        title: "QR Code Restaurant Order System",
        description: "Restaurant ordering system via QR Code reducing contact and improving customer convenience",
        features: ["QR Code Ordering", "Real-time Order", "Menu Management", "Complete POS"],
      },
      resort: {
        title: "Resort Rental Web",
        description: "Resort booking website with search, booking, and online payment support",
        features: ["Accommodation Search", "Online Booking", "Payment", "Reviews & Ratings"],
      },
      projectTracking: {
        title: "Project Tracking App",
        description: "Team member tracking system for project management. Monitor progress, assign tasks, and evaluate team performance in real-time",
        features: ["Team Member Tracking", "Task Assignment", "Progress Monitoring", "Performance Reports"],
      },
      rwBoost: {
        title: "RWBoost",
        description: "AI-powered disease code analysis system for healthcare. Analyzes ICD codes to optimize DRG weights and improve hospital reimbursement accuracy",
        features: ["AI Disease Code Analysis", "DRG Weight Optimization", "ICD Code Processing", "Healthcare Analytics"],
      },
      sanyaScan: {
        title: "SanyaScan",
        description: "Document scanning and OCR app supporting document scanning, text conversion, and storage",
        features: ["Document Scanning", "Thai OCR", "Cloud Storage", "File Sharing"],
      },
      webView4Delphi: {
        title: "WebView4Delphi Integration",
        description: "Desktop application development with Delphi using WebView for web content display",
        features: ["Desktop Application", "Web Integration", "Cross-platform UI", "Native Performance"],
      },
      esp32: {
        title: "ESP32 MicroSD Server",
        description: "IoT project for reading/writing data from MicroSD Card on ESP32 with Web Server",
        features: ["SD Card Read/Write", "Web Server", "Data Logging", "WiFi Control"],
      },
      fastApiMcp: {
        title: "FastAPI MCP Server",
        description: "MCP (Model Context Protocol) server for connecting FastAPI with AI Models",
        features: ["MCP Protocol", "API Endpoints", "Authentication", "AI Integration"],
      },
      thaiIdCard: {
        title: "Thai ID Card Reader API",
        description: "API for reading Thai national ID card data via Smart Card reader",
        features: ["Card Data Reading", "Photo Extraction", "REST API", "Multi-reader Support"],
      },
      trackingApp: {
        title: "Tracking App",
        description: "Real-time location and status tracking app for vehicles, employees, or goods",
        features: ["GPS Location Tracking", "Real-time Updates", "Travel History", "Geofence Alerts"],
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("th");

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "th" ? "en" : "th";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
