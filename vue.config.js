const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('css', resolve('src/css'))
      .set('stores', resolve('src/stores'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    port: 8100,
    proxy: {
      '/api': {
        target: 'http://192.168.50.16:6300',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
