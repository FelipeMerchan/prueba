module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        customProperties: false,
        calc: false,
      }
    }),
  ]
}