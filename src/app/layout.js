import "./globals.css";
import Providers from "../components/Providers";

export const metadata = {
  title: "AJ Software Dev Portfolio | Full Stack Developer",
  description: "Professional portfolio showcasing web development projects and skills",
  icons: {
    icon: [
      { url: "/ajsoft-portfolio/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/ajsoft-portfolio/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-kanit antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
