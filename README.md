# CRA HOOP Website — Ready-to-Deploy Project

**Climate Risk Analytics, LLC** | HOOP Isothermal Energy Storage Landing Site

This is a complete, static, production-ready website folder containing:

- `index.html` — Main HOOP product landing page (hero, specs, why HOOP, how it works, use-case imagery, presale options with PayPal, news teaser, contact form)
- `news.html` — Dedicated News & Updates page with 6 articles + modal viewer
- `css/style.css` — Custom glassmorphism, card, and typography styles
- `js/main.js` — Form handling, mobile menu, active nav, and utilities
- `images/HOOP/` — Placeholder directory for your production images

## Key Features
- Modern dark theme with glassmorphism (Tailwind + custom CSS)
- Fully responsive (mobile menu included)
- Zero-build / zero-dependency deployment (Tailwind via CDN)
- Working contact form with simulated submission + success states
- PayPal checkout button preserved for Option 1 (update link/image as needed)
- Accessible anchors, semantic structure, and clean code
- Easy to host on Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static host

## Quick Deployment

### Option 1: Drag & Drop (Easiest)
1. Zip the entire `cra-hoop-website` folder
2. Upload to Netlify Drop, Vercel, or Cloudflare Pages
3. Done — site live in seconds

### Option 2: Git + Hosting
```bash
cd cra-hoop-website
git init
git add .
git commit -m "Initial CRA HOOP website"
# Push to GitHub / GitLab then connect to Vercel/Netlify
```

### Option 3: Manual FTP / cPanel
Upload all files preserving the folder structure to your `public_html` or root directory.

## Important: Images

The HTML files currently use high-quality public placeholder images from picsum.photos for immediate visual appeal and testing.

**To use your real images:**

1. Place your actual images in `images/HOOP/`
2. Recommended filenames (matching original design):
   - `hoop-hero-deployment.png`
   - `hoop-hardware-comparison.png`
   - `hoop-datacenter-scenario.png`
   - `hoop-workflow-diagram.png`
   - `hoop-cumulative-benefit.png`
   - `hoop-disaster-recovery.png`
   - `hoop-mining-solar-microgrid.png`
   - `hoop-vs-lithium-comparison.png`

3. Then update the `src` attributes in `index.html` from the picsum URLs to:
   ```html
   src="images/HOOP/hoop-hero-deployment.png"
   ```

You can also host images on a CDN or image service and update the paths.

## Customization

### PayPal Button
- Current: Links to generic PayPal + uses official PayPal checkout image
- For production: Replace with your actual PayPal hosted button or Smart Payment Buttons code from PayPal Developer Dashboard.

### Contact Form
- Currently simulates submission (no backend)
- To make functional: Connect to Formspree, Netlify Forms, EmailJS, or your own endpoint in `js/main.js` → `handleFormSubmit()`

### Colors / Branding
- Primary accent: `#67f6ff` (cyan)
- Emerald highlights: `#10b981`
- Edit `css/style.css` or Tailwind classes directly in the HTML files.

### Adding More Pages
Duplicate the structure of `news.html` or `index.html`. Keep the same nav/footer pattern for consistency.

## File Structure
```
cra-hoop-website/
├── index.html          # Main HOOP landing + presale + contact
├── news.html           # News listing + modal article viewer
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── HOOP/           # Add your PNGs here
└── README.md
```

## Notes & Recommendations
- The site is intentionally **single-folder static** for maximum compatibility.
- All original content, specs, pricing, and messaging from the source design has been preserved and lightly polished for clarity and flow.
- Form submissions show a professional success flow (no data is sent anywhere by default).
- Presale closes June 30, 2026 or at 20 units — date is hardcoded in UI.

## Support
For questions about the HOOP technology or business development, use the contact form on the live site or reach out via the details on climateriskanalytics.lat.

**Built for easy deployment • Optimized for Climate Risk Analytics, LLC • May 2026**

---

Ready to launch. Upload and go live.