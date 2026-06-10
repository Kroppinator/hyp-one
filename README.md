# Coaching Website

A modern, mobile-first website for a coaching business. Built with **Next.js 16** (App Router), **React**, and **Tailwind CSS**.

## 📱 Features

- **Mobile-First Design**: >90% optimized for mobile visitors
- **Responsive Layout**: Looks perfect on mobile, tablet, and desktop
- **Static Export**: Deploys as fast static HTML/CSS/JS to any hosting (IONOS, GMX, etc.)
- **SEO Optimized**: Next.js metadata, semantic HTML, and proper structure
- **Cookie Consent**: GDPR-compliant cookie management with localStorage
- **Contact Form**: Backend-ready for email integration with GMX or other providers
- **Legal Pages**: Impressum and Datenschutz templates included
- **TypeScript**: Type-safe React components

## 📁 Project Structure

```
HypnoseWebsite/
├── app/
│   ├── layout.tsx               # Root layout with Navbar, Footer, CookieBanner
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global Tailwind styles
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services/Packages page
│   ├── contact/page.tsx         # Contact form page
│   ├── impressum/page.tsx       # Legal: Imprint
│   ├── datenschutz/page.tsx     # Legal: Privacy Policy
│   └── api/
│       └── contact/route.ts     # Email handler endpoint
├── components/
│   ├── Navbar.tsx               # Responsive navigation
│   ├── Footer.tsx               # Footer with links
│   └── CookieBanner.tsx         # Cookie consent banner
├── next.config.js               # Next.js config with static export
├── tailwind.config.js           # Tailwind CSS customization
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- Git installed

### 2. Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build static export
npm run build

# Preview production build
npm run start
```

### 3. Build for Deployment

```bash
# Create optimized static build (outputs to .next/static)
npm run build

# Output is ready to deploy to any hosting provider
```

## 🔧 Customization

### Update Content

1. **Homepage**: `app/page.tsx` - hero section, features, CTA
2. **About Page**: `app/about/page.tsx` - bio, qualifications
3. **Services**: `app/services/page.tsx` - packages and pricing
4. **Contact Page**: `app/contact/page.tsx` - form and info
5. **Legal Pages**:
   - `app/impressum/page.tsx` - imprint/company details
   - `app/datenschutz/page.tsx` - privacy policy

### Update Branding

Colors are configured in `tailwind.config.js`:

```js
colors: {
  primary: '#6366f1',     // Indigo (main brand)
  secondary: '#ec4899',   // Pink (accent)
  dark: '#1f2937',        // Charcoal (text)
  light: '#f9fafb',       // Off-white (background)
}
```

Update these values and rebuild to change the entire site's color scheme.

### Tailwind CSS Utility Classes

All styling uses Tailwind utility classes. No custom CSS needed. Examples:

```tsx
// Background colors
<div className="bg-primary text-white">  {/* Indigo background */}
<div className="bg-secondary text-white"> {/* Pink background */}

// Responsive classes
<div className="px-5 md:px-10">           {/* Mobile: 5, Desktop: 10 */}
<div className="text-base md:text-xl">    {/* Mobile: base, Desktop: xl */}
<div className="grid grid-cols-1 md:grid-cols-3"> {/* 1 col → 3 cols */}

// Common utilities
<button className="px-6 py-3 bg-primary text-white rounded hover:bg-indigo-600 transition-all">
```

## 📧 Contact Form Integration

The contact form is ready for email sending. You need to configure:

### 1. Environment Variables

Copy `.env.example` to `.env.local` and update with your email settings:

```bash
EMAIL_HOST=smtp.gmx.de          # or your email provider's SMTP
EMAIL_PORT=587
EMAIL_SECURE=false              # Use false for port 587, true for 465
EMAIL_USER=your-email@gmx.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=contact@yourdomain.com
```

### 2. For GMX Hosting

If using GMX or IONOS hosting with Node.js support:
- The API route `app/api/contact/route.ts` handles emails automatically
- No additional backend setup needed
- Make sure `nodemailer` is installed

### 3. For Static-Only Hosting (FTP/SFTP)

If your hosting doesn't support Node.js:
- The static export removes the API routes automatically during build
- You'll need a PHP backend or external service (Formspree, EmailJS, etc.)
- Alternative: Use a form service like Brevo, Mailchimp, or Netlify Forms

**Using a Form Service** (Easy Alternative):
```tsx
// In app/contact/page.tsx, change form action to:
<form action="https://api.web3forms.com/submit" method="POST">
  {/* Add your form here */}
</form>
```

## 🍪 Cookie Consent

- Simple localStorage-based implementation
- Banner appears on first visit
- Disappears after user clicks "Akzeptieren"
- Edit `components/CookieBanner.tsx` to customize text and styling

## ♿ Accessibility

- Semantic HTML structure
- WCAG 2.1 compliant color contrast
- Mobile-friendly touch targets (44px+ minimum)
- Keyboard navigation support
- Proper heading hierarchy

## 📊 SEO

- Metadata configured in `app/layout.tsx`
- Proper heading hierarchy on all pages
- Mobile-responsive viewport
- Static export generates proper HTML for search engines
- Consider adding `public/sitemap.xml` for SEO

## 🌐 Deployment

### Option 1: Static Hosting (IONOS, GMX, Mittwald, etc.)

```bash
# Build static export
npm run build

# Output is in .next/static/
# Upload via FTP to public_html/ or htdocs/

# Or manually:
# 1. Run: npm run build
# 2. Copy all files from project root to hosting
# 3. Hosting will serve static files automatically
```

### Option 2: Node.js Hosting

```bash
# Deploy entire directory with node_modules
npm install --production

# Set environment variables on hosting
# Start with: npm run start
```

## 📱 Mobile Optimization

- Tested for >90% mobile visitors
- Touch-friendly navigation and buttons
- Responsive font sizes
- Optimized for 4G networks
- Minimal external resources (no CDN needed)

## 🎨 Design System

### Colors
- **Primary**: Indigo (`#6366f1`) - main actions, headings
- **Secondary**: Pink (`#ec4899`) - accents, highlights
- **Dark**: Charcoal (`#1f2937`) - text, dark backgrounds
- **Light**: Off-white (`#f9fafb`) - backgrounds

### Typography
- System fonts (no external font loading for speed)
- Responsive font sizes
- Proper line-height for readability

### Spacing
- Mobile-first padding/margins
- Consistent 2rem sections
- Proper spacing between components

## 🔒 Security Notes

- Form data validated on client and server
- Environment variables for sensitive data (not in code)
- Use HTTPS in production
- Keep dependencies updated: `npm audit fix`

## 📝 License

This template is yours to customize and use for your coaching business.

## ❓ Support

### Hosting Support
- **IONOS**: ionos.de/support
- **GMX**: support.gmx.de

### Development
- **Next.js**: nextjs.org/docs
- **Tailwind CSS**: tailwindcss.com
- **React**: react.dev

### Legal (Germany)
- **GDPR**: gdpr-info.eu
- **NetzDG**: netzwerkdurchsetzungsgesetz.de

---

**Ready to launch?**
1. ✏️ Customize content in `/app` pages
2. 🎨 Update colors in `tailwind.config.js`
3. ✉️ Set up environment variables for email
4. 🏗️ Run `npm run build`
5. 🚀 Deploy to your hosting provider
6. ✅ Test on mobile and desktop
7. 📱 Share with customers!
