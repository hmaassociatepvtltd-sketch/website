# HMA Solar - Modern Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TinaCMS](https://img.shields.io/badge/TinaCMS-EC4815?style=for-the-badge&logo=tina&logoColor=white)](https://tina.io/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

A modern, responsive website for HMA Solar, built with Next.js and integrated with TinaCMS for content management.

## 🚀 Features

- ⚡ Blazing fast performance with Next.js 13+ App Router
- 🎨 Modern, responsive design
- 📝 Content management with TinaCMS
- 🌐 Server-side rendering and static site generation
- 🎯 SEO optimized
- 🛠️ Developer-friendly setup

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules / Tailwind CSS
- **CMS**: [TinaCMS](https://tina.io/)
- **Deployment**: Vercel
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd hma-solar
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
src/
├── app/                  # App Router
│   ├── api/             # API routes
│   ├── components/      # Reusable components
│   ├── styles/          # Global styles
│   └── page.js          # Home page
├── public/              # Static files
└── tina/                # TinaCMS configuration
```

## 🚀 Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import the project on [Vercel](https://vercel.com/new)
3. Set up environment variables in the Vercel dashboard
4. Deploy!

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TinaCMS Documentation](https://tina.io/docs/)
- [React Documentation](https://reactjs.org/)

---

<p align="center">
  Built with ❤️ by HMA Solar Team
</p>
