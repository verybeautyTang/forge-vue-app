const { resolve } = require('path')

module.exports = {
  // Source files
  src: resolve(__dirname, '../src/main.js'),

  // Production build files
  build: resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: resolve(__dirname, '../public')
}
