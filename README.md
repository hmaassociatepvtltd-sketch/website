# ⚡ HMA Associate Pvt Ltd - Official Website & CMS

[![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TinaCMS](https://img.shields.io/badge/TinaCMS-2.9-EC4815?style=for-the-badge&logo=tina&logoColor=white)](https://tina.io/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.23-E91E63?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)

A state-of-the-art, fully responsive, and highly interactive enterprise web application for **HMA Associate Pvt Ltd** — leaders in Solar Power Solutions, MEP Engineering Services, and Commercial/Residential Construction across Pakistan.

The platform combines **Next.js 16 App Router**, **TinaCMS visual content editor**, **Tailwind CSS v4**, and **Framer Motion** to deliver blazing fast performance, dynamic content administration, interactive load & cost calculators, and full SEO optimization.

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack & Dependencies](#%EF%B8%8F-tech-stack--dependencies)
- [📁 Comprehensive Directory Structure](#-comprehensive-directory-structure)
- [📝 TinaCMS Content & Schema Architecture](#-tinacms-content--schema-architecture)
- [🌐 Routing & Page Structure](#-routing--page-structure)
- [🚀 Getting Started](#-getting-started)
- [📬 Contact & Mail Handling](#-contact--mail-handling)
- [🔍 SEO & Optimization](#-seo--optimization)
- [🚀 Deployment](#-deployment)

---

## 🌟 Features

- **⚡ Next.js 16 App Router**: Server-side rendering (SSR), static site generation (SSG), dynamic routes, and fast image optimization.
- **🎨 TinaCMS Headless & Visual Editor**: In-context visual editing experience for site admins, powering dynamic block-based pages.
- **🧮 Interactive Solar Load & Quotation Calculator**: Real-time solar system sizing, load calculation, and instant cost estimation.
- **📦 Comprehensive Product Catalog**: Structured categories for Solar Panels, Inverters, and Solar Batteries with rich specs and Markdown details.
- **🏗️ Works & Engineering Portfolio Showcase**: Interactive showcase of completed solar, MEP, and construction projects across Pakistan.
- **✨ Smooth Motion & Animations**: Lenis smooth scrolling paired with Framer Motion scroll animations, tab switches, and hover interactions.
- **📧 Server Action Email Integration**: Nodemailer SMTP handling for direct quotation submissions and contact inquiries.
- **🎯 Dynamic SEO & Schema**: Built-in JSON-LD structured data, automatic XML sitemap (`sitemap.js`), dynamic robots configuration (`robots.js`), and meta tags managed via TinaCMS.

---

## 🛠️ Tech Stack & Dependencies

### **Core Framework & Libraries**
- **Framework**: Next.js `^16.1.0` (App Router)
- **UI Library**: React `^19.2.3` & React DOM `^19.2.3`
- **CMS**: TinaCMS `^2.9.0` with `@tinacms/cli` `^1.11.0`

### **Styling & Design System**
- **CSS Engine**: Tailwind CSS `^4.0.0` with `@tailwindcss/postcss` & `@tailwindcss/typography`
- **Animations**: `motion` `^12.23.24` (Framer Motion v12) & `tw-animate-css`
- **Smooth Scroll**: `@studio-freight/lenis` `^1.0.42`
- **Icons**: `lucide-react` `^0.546.0` & `react-icons` `^5.5.0`
- **Utility Libraries**: `clsx`, `tailwind-merge`, `class-variance-authority` (CVA)

### **UI Components & Utilities**
- **Primitives**: `@radix-ui/react-dialog`
- **Sliders & Maps**: `swiper` `^12.0.3` & `svg-dotted-map` `^2.0.1`
- **Email Engine**: `nodemailer` `^8.0.1`

---

## 📁 Comprehensive Directory Structure

```
hma-website/
├── content/                     # Markdown files managed by TinaCMS
│   ├── page/                    # Page level content files (about.md, home.md, certifications.md, etc.)
│   ├── partner/                 # Partner & Client logo items
│   ├── product/                 # Product catalog content
│   │   ├── Batteries/           # Solar Battery Markdown files
│   │   ├── Inverters/           # Solar Inverter Markdown files
│   │   └── Panels/              # Solar Panel Markdown files
│   ├── services/                # Engineering Service Markdown files (Solar, MEP, Construction)
│   ├── site/                    # Global site settings & metadata (site_settings.md)
│   └── works/                   # Portfolio Project Markdown files
├── public/                      # Static assets, images, icons & certifications
├── src/                         # Application source code
│   ├── app/                     # Next.js App Router pages and layouts
│   │   ├── about/               # About Us route (/about)
│   │   │   └── page.jsx
│   │   ├── certifications/      # Certifications route (/certifications)
│   │   │   └── page.jsx
│   │   ├── ourclients/          # Clients & Partners route (/ourclients)
│   │   │   └── page.jsx
│   │   ├── products/            # Product catalog & details
│   │   │   ├── [id]/            # Category product list (/products/Panels, etc.)
│   │   │   ├── detail/[id]/     # Individual product detail view
│   │   │   └── page.js          # Products landing page
│   │   ├── quotation/           # Solar quotation & calculator page (/quotation)
│   │   │   └── page.jsx
│   │   ├── services/            # Service details route
│   │   │   └── [id]/page.jsx    # Service detail view (/services/Solar-Solutions, etc.)
│   │   ├── work/                # Project portfolio routes
│   │   │   ├── [id]/page.jsx    # Project detail view (/work/Cantt-Project, etc.)
│   │   │   └── page.js          # Portfolio main index
│   │   ├── favicon.ico
│   │   ├── globals.css          # Global CSS, Tailwind CSS imports, custom scrollbar & theme tokens
│   │   ├── layout.js            # Root layout (Lenis scroll, Navbar, Footer wrapper)
│   │   ├── not-found.js         # Custom 404 page
│   │   ├── page.js              # Home page renderer
│   │   ├── robots.js            # Dynamic robots.txt generator
│   │   └── sitemap.js           # Dynamic XML sitemap generator
│   ├── components/              # React components catalog
│   │   ├── Globals/             # Global layout & structural elements
│   │   │   ├── Footer.jsx       # Dynamic footer with TinaCMS site settings
│   │   │   ├── JsonLd.jsx       # SEO structured data component
│   │   │   ├── Navbar.jsx       # Main navigation header with desktop & mobile drawer
│   │   │   ├── PageLoader.jsx   # Smooth page load transition overlay
│   │   │   └── ScrollUp.jsx     # Back-to-top floating button
│   │   ├── LandingPage/         # Page builder blocks & sections
│   │   │   ├── About/           # About section cards & works showcase
│   │   │   ├── Services/        # Service card components
│   │   │   ├── AboutUsBlock.jsx # Custom content section block
│   │   │   ├── AnimatedHeroSection.jsx # Animated main hero section
│   │   │   ├── CalculatorForm.jsx # Detailed solar load calculation form
│   │   │   ├── CertificateCard.jsx # Grid of ISO/company certificates
│   │   │   ├── ContactForm.jsx  # Contact & inquiry form section
│   │   │   ├── Container.jsx    # Component renderer for TinaCMS page blocks
│   │   │   ├── ContentShowroom.jsx # Feature showcase section
│   │   │   ├── DirectorMessage.jsx # Leadership quote & message section
│   │   │   ├── Gallery.jsx      # Image gallery grid
│   │   │   ├── LocationBlock.jsx # Interactive location map & address card
│   │   │   ├── ModernCalculator.jsx # Modern tabbed solar calculator widget
│   │   │   ├── ModernContainer.jsx # Specialized page container block renderer
│   │   │   ├── ModernServices.jsx # Service showcase grid section
│   │   │   ├── OurPartners.jsx  # Partner logo carousel / grid
│   │   │   ├── PageComponent.jsx# Page renderer connecting TinaCMS data
│   │   │   ├── Products.jsx     # Home page featured products section
│   │   │   ├── ProjectPortfolio.jsx # Home page portfolio section
│   │   │   ├── ServiceDetailShowcase.jsx # Service detail view renderer
│   │   │   └── Testimonials.jsx # Client reviews & ratings slider
│   │   ├── Products/            # Product catalog components
│   │   ├── Work/                # Portfolio display components
│   │   └── ui/                  # Custom UI primitives (Button, Input, Dialog, etc.)
│   └── lib/                     # Utilities & server actions
│       ├── send-mail.js         # Nodemailer Server Action for contact/quote emails
│       └── utils.js             # Utility functions (`cn` helper for class names)
├── tina/                        # TinaCMS configuration & schemas
│   ├── config.js                # Main TinaCMS schema definition (collections, fields, blocks)
│   └── __generated__/           # Auto-generated GraphQL client & JSON schema
├── components.json              # Shadcn UI / component configuration
├── jsconfig.json                # JS path aliases (@/* -> ./src/*)
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration for Tailwind CSS v4
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation
```

---

## 📝 TinaCMS Content & Schema Architecture

The site uses **TinaCMS** as a git-backed headless CMS. Content is stored as Markdown files under `/content` and edited visually via the Tina interface (`/admin`).

### **Collections Defined (`tina/config.js`)**

1. **Pages (`page`)**:
   - Location: `content/page/`
   - Purpose: Multi-block layout configuration for major pages (`home.md`, `about.md`, `certifications.md`, `ourclients.md`, `products.md`, `work.md`).
   - Block System: Utilizes modular block templates (`aboutUsBlock`, `directorMessage`, `animatedHeroSection`, `modernCalculator`, `contentShowroom`, `projectCardsGrid`, `modernServices`, `locationBlock`, `contactForm`, `gallery`, `testimonials`, etc.).

2. **Products (`product`)**:
   - Location: `content/product/` (subfolders: `Panels/`, `Inverters/`, `Batteries/`)
   - Purpose: Product catalog entries with spec sheets, category tags, images, and descriptions.

3. **Services (`service`)**:
   - Location: `content/services/` (`Solar-Solutions.md`, `MEP-Services.md`, `Construction.md`)
   - Purpose: Detailed engineering service offerings with block-based subpages.

4. **Works (`work`)**:
   - Location: `content/works/` (e.g. `Cantt-Project.md`, `Wapda-Town-Project.md`, `Lahore-Project.md`)
   - Purpose: Project portfolio items with project metrics, image galleries, and client details.

5. **Partners (`partner`)**:
   - Location: `content/partner/`
   - Purpose: Logo and name entries for client and corporate partner displays.

6. **Site Settings (`site`)**:
   - Location: `content/site/site_settings.md`
   - Purpose: Global site metadata, logos, navigation details, contact phones, email, social links, and footer configuration.

---

## 🌐 Routing & Page Structure

| Path | Description | Data Source |
| :--- | :--- | :--- |
| `/` | Main Home Landing Page | `content/page/home.md` |
| `/about` | Company Background, Leadership & Vision | `content/page/about.md` |
| `/services/[id]` | Individual Service Detail Page (Solar, MEP, Construction) | `content/services/[id].md` |
| `/products` | Main Product Directory | `content/page/products.md` |
| `/products/[id]` | Category Product List (e.g., `/products/Panels`) | `content/product/[category]/` |
| `/products/detail/[id]` | Individual Product Details & Specifications | `content/product/*/[id].md` |
| `/work` | Portfolio & Project Showcase | `content/page/work.md` |
| `/work/[id]` | Individual Project Case Study Page | `content/works/[id].md` |
| `/certifications` | Corporate Certifications & Quality Accreditations | `content/page/certifications.md` |
| `/ourclients` | Client Roster & Strategic Partners | `content/page/ourclients.md` |
| `/quotation` | Solar Sizing & Cost Estimate Calculator | `content/page/home.md` / `ModernCalculator` |
| `/admin` | TinaCMS Visual Content Editor Dashboard | TinaCMS Engine |

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: `v18.0.0` or higher (Node.js 20 recommended)
- **npm** or **yarn** or **pnpm**

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server (starts TinaCMS CLI + Next.js dev server):
   ```bash
   npm run dev
   ```

4. Open the browser:
   - **Main Website**: [http://localhost:3000](http://localhost:3000)
   - **TinaCMS Visual Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

### **Available Scripts**

- `npm run dev`: Runs `tinacms dev -c "next dev"` to start both TinaCMS local backend server and Next.js dev mode.
- `npm run build`: Runs `tinacms build && next build` to compile CMS client code and build production Next.js application.
- `npm run start`: Starts the compiled Next.js production server.

---

## 📬 Contact & Mail Handling

Contact and Solar Quote form submissions use a Next.js **Server Action** powered by `nodemailer` located at `src/lib/send-mail.js`.

- **Form Components**: `ContactForm.jsx` & `CalculatorForm.jsx`
- **Server Action**: `sendMail({ email, sendTo, subject, text, html })`
- **Recipients**: Dispatches incoming customer inquiries to `hmaassociates269@gmail.com`.

---

## 🔍 SEO & Optimization

- **Structured Data (JSON-LD)**: Provided via `JsonLd.jsx` for rich Google search result snippets.
- **Sitemap Generator**: `src/app/sitemap.js` dynamically compiles URLs for all static pages, services, products, and portfolio works.
- **Robots Configuration**: `src/app/robots.js` dictates indexing rules for search engine crawlers.
- **Smooth Scroll & UX**: `@studio-freight/lenis` ensures fluid page movement without impacting scroll accessibility.

---

## 🚀 Deployment

### **Vercel / Netlify Deployment**

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Connect repository to **Vercel** or **Netlify**.
3. Configure Build Settings:
   - **Build Command**: `npm run build` (or `npx tinacms build && next build`)
   - **Output Directory**: `.next`
4. Set Environment Variables in deployment platform:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

---

<p align="center">
  <b>HMA Associate Pvt Ltd</b> • Engineering the Future with Clean Energy & Precision Construction
</p>
