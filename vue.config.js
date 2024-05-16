const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }]
    }
  }
}