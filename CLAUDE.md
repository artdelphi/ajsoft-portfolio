# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production (outputs to ./out for static export)
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16** portfolio website using the App Router with static export for GitHub Pages deployment.

### Tech Stack
- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **Tailwind CSS 4** (via PostCSS)
- **Kanit font** (Thai font loaded from Google Fonts)

### Project Structure
```
src/
├── app/
│   ├── page.js          # Main page - composes all section components
│   ├── layout.js        # Root layout with metadata and font setup
│   └── globals.css      # Global styles, CSS variables, custom animations
└── components/
    ├── Navbar.jsx       # Fixed navigation with mobile menu
    ├── Hero.jsx         # Hero section with typing animation
    ├── About.jsx        # About section
    ├── Skills.jsx       # Skills with progress bars
    ├── Projects.jsx     # Project gallery with category filter
    ├── Contact.jsx      # Contact form and info
    ├── Footer.jsx       # Footer with links
    └── ScrollToTop.jsx  # Floating scroll-to-top button
```

### Key Configuration
- **Static Export**: Configured in `next.config.mjs` with `output: 'export'`
- **Base Path**: `/ajsoft-portfolio` for GitHub Pages deployment
- **CSS Variables**: Defined in `globals.css` (--background, --primary, --secondary, etc.)
- **Custom Classes**: `.gradient-text`, `.card-hover`, `.animate-fade-in-up`, `.animate-float`, `.animate-pulse-glow`

### Deployment
Auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main` or `claude/create-portfolio-website-rQT2X` branches.

## Contact Info (Owner)
- Name: AJ Software Dev
- Email: ponyajdeveloper@gmail.com
- Phone: 063-971-5888
- Facebook: https://www.facebook.com/develop.everyting
