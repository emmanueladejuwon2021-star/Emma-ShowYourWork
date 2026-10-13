# Adejuwon Emmanuel | Web Developer Portfolio

A production-grade portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features dark/light mode, smooth animations, and optimized performance.

## 🚀 Features

- **Production-Grade Design** — Premium dark/light mode with smooth transitions
- **Responsive** — Optimized for all screen sizes (320px to 4K)
- **Performance** — Optimized bundle size, lazy loading, efficient animations
- **SEO** — Full meta tags, structured data, sitemap, Open Graph
- **Accessibility** — WCAG compliant, keyboard navigation, reduced motion support
- **PWA Ready** — Installable as a progressive web app
- **Vercel Optimized** — Ready for one-click deployment

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

The site includes:
- `vercel.json` for routing and security headers
- Optimized caching strategies
- SPA fallback routing
- Security headers (CSP, X-Frame-Options, etc.)

### Manual Deployment

```bash
npm run build
# Upload the contents of the `dist` folder to your hosting provider
```

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # SVG favicon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO robots
│   ├── sitemap.xml          # SEO sitemap
│   └── og-image.svg         # Social sharing image
├── src/
│   ├── components/          # React components
│   ├── context/             # Theme context
│   ├── data/                # Content data
│   ├── hooks/               # Custom hooks
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── vercel.json              # Vercel configuration
└── vite.config.js           # Vite configuration
```

## 🎨 Customization

### Content
Edit `src/data/content.ts` to update:
- Personal information
- Projects
- Services
- Testimonials
- Tech stack

### Theme
The site uses a custom theme system in `src/context/ThemeContext.tsx`. Colors can be adjusted in `src/index.css`.

## 🔒 Security Headers

Configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for LCP, FID, CLS
- **Bundle Size:** Code-split and tree-shaken
- **Caching:** Aggressive caching for static assets

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 Author

**Adejuwon Emmanuel**
- Website: [adejuwonemmanuel.vercel.app](https://adejuwonemmanuel.vercel.app)
- GitHub: [@adejuwon](https://github.com/adejuwon)
- LinkedIn: [Adejuwon Emmanuel](https://linkedin.com/in/adejuwon)
