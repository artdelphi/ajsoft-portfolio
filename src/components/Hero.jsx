"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [text, setText] = useState("");
  const fullText = t.hero.subtitle;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setText("");
    setIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-blue-400 text-lg mb-4 font-medium">
            {t.hero.welcome}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t.hero.title}</span>
          </h1>
          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow"
            >
              {t.hero.viewPortfolio}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-500/10 transition-all hover:scale-105"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/develop.everyting"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="mailto:ponyajdeveloper@gmail.com"
            className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
