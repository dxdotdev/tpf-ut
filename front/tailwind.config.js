import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        default: {
          primary: '#0063B1',
          secondary: '#09185E',
          accent: '#0063B1',
          neutral: '#F2F8FC',
          'base-100': '#09185e',
          info: '#0078d4',
          success: '#00cc6a',
          warning: '#ffb800',
          error: '#e81123',
        },
      },
    ],
  },
}
