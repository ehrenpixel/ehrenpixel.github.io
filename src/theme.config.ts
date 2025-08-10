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
      icon: 'tabler--brand-discord',
      href: 'https://discord.gg/Vrb4Hmb4XG',
      label: 'Join our community on Discord'
    },
    {
      icon: 'tabler--brand-x',
      href: 'https://x.com/ehrenpixel/',
      label: 'Follow us on X (Twitter)'
    },
    {
      icon: 'tabler--brand-twitch',
      href: 'https://www.twitch.tv/ehrenpixel',
      label: 'Watch us on Twitch'
    },
    {
      icon: 'tabler--brand-youtube',
      href: 'https://www.youtube.com/@ehrenpixel',
      label: 'Subscribe to our YouTube channel'
    },
    {
      icon: 'tabler--brand-google-play',
      href: 'https://play.google.com/store/apps/dev?id=8416335982805315188',
      label: 'See our games on Google Play'
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
