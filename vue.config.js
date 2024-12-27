const path = require('path')

module.exports = {
  // publicPath: './',  // production environment
  publicPath: '/',      // development environment
  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    open: true, // 自动打开浏览器

    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}
