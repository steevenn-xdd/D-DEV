/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'DelaGothicOne': ['Dela Gothic One', 'sans']
      },
      colors: {
        primary: 'var(--color-rosadito)',
        secondary: 'var(--color-secondary)',
        moradito: '#3e4188',
        patel: '#f5a8a9',
        fondito: '#111111',
        rosadito: '#ef794d',
        ocurito: '#5a3030'
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)'
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)'
      },
      borderColor: {
        default: 'var(--color-border)'
      }
    }
  }
}
