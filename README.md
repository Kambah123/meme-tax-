# CryptoTax Legends - Premium Memecoin Tax Website

A stunning, modern website for memecoin tax services in Australia. Built with React, Tailwind CSS, and premium animations.

## 🚀 Features

- **Premium Design**: $100,000 quality website with stunning gradients and animations
- **Memecoin Integration**: Features logos of top memecoins (DOGE, SHIBA, PEPE, BONK, FLOKI)
- **Responsive**: Perfect on desktop, tablet, and mobile
- **Interactive**: Smooth scrolling navigation, hover effects, and micro-interactions
- **Professional**: Comprehensive service pages and contact forms
- **Modern Tech Stack**: React 18, Tailwind CSS, Framer Motion, shadcn/ui

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🚀 Deployment to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the repository in Vercel
4. Deploy automatically

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 3: Manual Upload

1. Build the project: `pnpm run build`
2. Upload the `dist` folder to Vercel
3. Configure as a static site

## 📁 Project Structure

```
memecoin-tax-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and logos
│   │   ├── dogecoin-logo.png
│   │   ├── shiba-logo.png
│   │   ├── pepe-logo.png
│   │   ├── bonk-logo.png
│   │   └── floki-logo.png
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── dist/                  # Production build (generated)
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Design Features

- **Gradient Backgrounds**: Dynamic purple/blue gradients
- **Animated Elements**: Mouse-following background effects
- **Memecoin Showcase**: Interactive logo carousel
- **Premium Cards**: Glass-morphism service cards
- **Smooth Navigation**: Scroll-to-section functionality
- **Responsive Design**: Mobile-first approach
- **Professional Typography**: Modern font hierarchy

## 📱 Sections

1. **Hero Section**: Eye-catching headline with memecoin logos
2. **Services**: Three main service offerings with pricing
3. **Testimonials**: Customer success stories
4. **About**: Company background and statistics
5. **Contact**: Contact form and business information
6. **Footer**: Complete site navigation and links

## 🔧 Customization

### Colors
The website uses a custom color palette defined in `App.css`. Main colors:
- Primary: Yellow/Orange gradients (#FFD700 to #FF6B35)
- Background: Purple/Blue gradients
- Text: White with gray variations

### Content
All content is easily customizable in `App.jsx`:
- Service descriptions and pricing
- Testimonials and reviews
- Contact information
- Company details

### Images
Replace memecoin logos in `src/assets/` with your preferred images.

## 🌟 Performance

- **Optimized Build**: Vite optimization with code splitting
- **Image Optimization**: Compressed memecoin logos
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Size**: ~366KB JavaScript, ~102KB CSS (gzipped: ~115KB JS, ~16KB CSS)

## 📞 Support

For questions about this website:
- Email: hello@cryptotaxlegends.com.au
- Phone: +61 1300 CRYPTO

## 📄 License

This project is proprietary software created for CryptoTax Legends.

---

**Built with ❤️ for the crypto community in Australia** 🇦🇺

