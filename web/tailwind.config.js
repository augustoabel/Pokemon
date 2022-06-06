module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue' : '#FFDA55',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}