module.exports = {
  devServer: {
    port: 8080,
    https: false,
    open: true,

    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}