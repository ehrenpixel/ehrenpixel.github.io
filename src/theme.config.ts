import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://www.ehrenpixel.com',
  title: 'EHRENPiXEL',
  description:
    'Games with principles. Crafted in Germany. Made with care. Played with joy.',
  author: 'EHRENPiXEL',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/about/' }
  ],
  footerItems: [
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-ehrenpixel',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
