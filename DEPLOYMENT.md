# Vercel Deployment Guide

## Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

## What's Included

### ✅ Production Optimizations
- **Code Splitting** — Each section lazy-loaded for faster initial load
- **Tree Shaking** — Unused code automatically removed
- **Asset Optimization** — Images, fonts, and CSS optimized
- **Gzip Compression** — Enabled by default on Vercel

### ✅ SEO
- **Meta Tags** — Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data** — JSON-LD schema for Person
- **Sitemap** — `public/sitemap.xml` for search engines
- **Robots.txt** — `public/robots.txt` for crawler control
- **Canonical URL** — Prevents duplicate content issues

### ✅ Security Headers
Configured in `vercel.json`:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### ✅ Caching Strategy
- **Static Assets** — 1 year cache with immutable flag
- **Images** — 1 week cache
- **Fonts** — 1 year cache with CORS headers
- **HTML** — No cache (always fresh)

### ✅ PWA Support
- **Service Worker** — Offline support and caching
- **Manifest** — Installable as app
- **Theme Color** — Matches dark/light mode

### ✅ Performance Monitoring
- **Error Boundary** — Catches and reports errors
- **Web Vitals** — Performance metrics logged
- **Console Logging** — Production metrics available

## Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Environment Variables

If you need environment variables:

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add variables from `.env.example`

## Post-Deployment Checklist

- [ ] Update `sitemap.xml` with your domain
- [ ] Update `manifest.json` with your details
- [ ] Update social media links in `src/data/content.ts`
- [ ] Test all pages and sections
- [ ] Check Lighthouse score (aim for 95+)
- [ ] Verify dark/light mode toggle
- [ ] Test on mobile devices
- [ ] Check console for errors

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh
Vercel handles SPA routing automatically via `vercel.json`

### CSS Not Loading
Check that `dist/index.html` references the correct CSS file

### Service Worker Issues
```bash
# Unregister in browser console
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
});
```

## Performance Tips

1. **Images** — Use WebP format, optimize with Squoosh
2. **Fonts** — Already optimized with `display=swap`
3. **Animations** — Use `will-change` sparingly
4. **Bundle Size** — Currently ~95KB gzipped (excellent)

## Analytics (Optional)

Add Google Analytics:

1. Create `.env` file:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=%VITE_GA_MEASUREMENT_ID%"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', '%VITE_GA_MEASUREMENT_ID%');
   </script>
   ```

## Support

For issues or questions:
- GitHub Issues: [Your repo issues]
- Vercel Docs: https://vercel.com/docs
