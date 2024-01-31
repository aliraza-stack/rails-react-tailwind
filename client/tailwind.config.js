/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('https://picsum.photos/1920/1920/?random')",
        'body-img': "url('https://picsum.photos/1600/1600/?random')",
      },
      colors: {
        'headings': 'hsl(36,85%,55%,0.8)',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'backdrop': '#212121',
      },
    },
  },
  plugins: [],
}
