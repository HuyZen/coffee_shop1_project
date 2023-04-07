/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-coffee': '#A6767E',
        'bg-coffee': '#F7F7F7',
        'primary': '#006341',
        'rim': '#ffbd59',
        'text-color': '#000000',
        'coffee': {
          'text-grey': {
            100: '#6B7280',
          },
          'text-brown': {
            100: '#E8D6D0',
            200: '#C89F94',
            400: '#A25F4B',
            600: '#744838'

          }
        }
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      screens: {
        sm: { min: "0px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px" },
        
      }
    },
  },
  plugins: [],
};
