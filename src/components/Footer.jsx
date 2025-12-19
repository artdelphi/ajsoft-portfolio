"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t.footer.navigation,
      links: [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.portfolio, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
      ],
    },
    {
      title: t.footer.services,
      links: [
        { name: t.footer.servicesList.web, href: "#" },
        { name: t.footer.servicesList.mobile, href: "#" },
        { name: t.footer.servicesList.desktop, href: "#" },
        { name: t.footer.servicesList.ai, href: "#" },
      ],
    },
    {
      title: t.footer.connect,
      links: [
        { name: "Facebook", href: "https://www.facebook.com/develop.everyting" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">AJ Software Dev</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/develop.everyting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1e293b] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AJ Software Dev. {t.footer.copyright}.
          </p>
          <p className="text-gray-500 text-sm">
            {t.footer.designedBy} AJ Software Dev
          </p>
        </div>
      </div>
    </footer>
  );
}
