module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-full-screen': '#FFFFFF',
      },
      height: {
        '100': '25rem ',
        '128': '32rem',
        '160': '40rem',
        '38vw': '38vw',
      },
      borderRadius: {
        '6xl': '3rem',
      },
      width: {
        '140': '35rem',
        '150': '37.5rem',
        '500': '1500px',
        '70vw' : '84vw',
      },
    },
  },
  plugins: [],
}
