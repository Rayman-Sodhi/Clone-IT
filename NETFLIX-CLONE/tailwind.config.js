module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        front: '#DD0611',
        fadedBlack: '#010000'
      },
      screens: {
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        "2xl": '1536px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
