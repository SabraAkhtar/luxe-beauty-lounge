# Luxe Beauty Lounge

Luxe Beauty Lounge is a premium, enterprise-grade Progressive Web Application (PWA) built for a luxury salon and spa based in Peshawar. It combines award-winning UI/UX design with industry-leading frontend architecture to deliver an exceptional digital experience.

## 🌟 Key Features

* **Progressive Web App (PWA)**: Installable on mobile and desktop devices with offline caching capabilities.
* **Multi-Language Support (i18n)**: Seamless switching between English and Urdu with full RTL support.
* **Dark / Light Mode**: An elegant, flash-free theme toggle utilizing CSS variables and React Context.
* **Advanced Booking Flow**: A comprehensive multi-step booking system featuring real-time client-side validation and a detailed summary screen.
* **Advanced GSAP Storytelling**: Subtle scroll-triggered parallax effects and entrance animations that enhance the luxury feel without degrading performance.
* **Dynamic Code Splitting**: All components below the fold are lazily loaded using `React.lazy` and `<Suspense>`, guaranteeing a near-instant First Contentful Paint (FCP).
* **SEO Optimized**: Fully integrated `react-helmet-async` with automated Schema.org LocalBusiness JSON-LD markup, `robots.txt`, and `sitemap.xml`.
* **Custom Magnetic Cursor**: A desktop-only, Framer Motion-powered custom cursor that interacts dynamically with clickable elements.

## 🛠️ Tech Stack

* **Framework**: React 19 + Vite 6
* **Routing**: React Router DOM
* **Styling**: Vanilla CSS Modules (Zero CSS-in-JS overhead)
* **Animations**: Framer Motion (UI Choreography) & GSAP (Scroll Parallax)
* **Smooth Scrolling**: Lenis
* **Icons**: React Icons
* **PWA**: `vite-plugin-pwa`

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/luxe-beauty-lounge.git
   cd luxe-beauty-lounge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   *This command will bundle the application and generate the PWA service workers inside the `dist` directory.*

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

This project is optimized for deployment on modern Edge networks like **Vercel**, **Netlify**, or **Cloudflare Pages**. 

Simply connect your GitHub repository to your preferred platform. The build settings should automatically be detected as:
* **Framework**: Vite
* **Build Command**: `npm run build`
* **Output Directory**: `dist`

## 📈 Performance & Accessibility (Lighthouse)

By utilizing aggressive code splitting, native lazy loading, semantic HTML, and ARIA labels, this application is engineered to achieve **95+ scores across all Google Lighthouse metrics** (Performance, Accessibility, Best Practices, and SEO).

---
*Designed & Developed with precision and elegance.*
