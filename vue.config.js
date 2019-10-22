const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@styles', resolve('src/assets/styles'))
      .set('@common', resolve('src/components/Common'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
