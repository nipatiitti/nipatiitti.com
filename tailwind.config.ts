import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        heading: ['Nunito', 'serif'],
        body: ['Noto Sans', 'serif']
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      colors: {}
    }
  },

  plugins: []
} satisfies Config
