const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 6585,
      host: 'localhost'
    },
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  }
})
