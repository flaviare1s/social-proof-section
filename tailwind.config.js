/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: 'hsl(333, 80%, 67%)',
        darkGrayishMagenta: 'hsl(303, 10%, 53%)',
        lightGrayishMagenta: 'hsl(300, 24%, 96%)'
      },
      fontFamily: {
        'Spartan': ['League Spartan', 'sans-serif']
      },
      spacing: {
        'mobile': '374px',
        '57': '234px',
        '102': '445px',
      },
      fontSize: {
        base: '17px',
        lg: '19px',
        '4xl': '40px',
        '6xl': '56px',
      },
      backgroundImage: {
        'pattern-mobile': "url('../images/bg-pattern-top-mobile.svg'), url('../images/bg-pattern-bottom-mobile.svg')",
        'pattern-desktop': "url('../images/bg-pattern-top-desktop.svg'), url('../images/bg-pattern-bottom-desktop.svg')",
      },
      lineHeight: {
        '10': '48px',
      }
    }
  },
  plugins: [],
}
