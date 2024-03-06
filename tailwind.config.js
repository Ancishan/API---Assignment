module.exports = {
   mode: 'jit',
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '641px' },
        'md': { 'min': '769px' },
        'lg': { 'min': '1025px' },
        'xl': { 'min': '1281px' },
        '2xl': { 'min': '1537px' },
      },
    },
  },
  plugins: [require("daisyui")],
}