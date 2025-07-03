/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'background': 'var(--color-background)',
        'sidebar': 'var(--color-sidebar)',
        'card': 'var(--color-card)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-color': 'var(--color-border-color)',
        'input-bg': 'var(--color-input-bg)',
        'hover-light': 'var(--color-hover-light)',
        'hover-dark': 'var(--color-hover-dark)',
        'selected-row-bg': 'var(--color-selected-row-bg)', // Yeni eklenen renk
      },
    },
  },
  plugins: [],
}
