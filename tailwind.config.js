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
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '40px',
        '6xl': '56px',
      },
      backgroundImage: {
        'mob-top': "url('./images/bg-pattern-top-mobile.svg')",
        'mob-bot': "url('./images/bg-pattern-bottom-mobile.svg')",
        'des-top': "url('/images/bg-pattern-top-desktop.svg')",
        'des-bot': "url('/images/bg-pattern-top-desktop.svg')",
      }
    }
  }
  plugins: [],
}
