const path = require('path')
module.exports = {

  publicPath: "./",
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 100, // 换算的基数(设计图750的根字体为32)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/assets/css/theme/black/common.less")] // 引入全局样式变量
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8888,
    https: false,
    hotOnly: false,
    open: false, // 配置自动启动浏览器
    // contentBase: path.join(__dirname, '.', 'water-release-webroot'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/isc': {
        //本地服务接口地址
        target: 'https://10.128.129.48:9099', // 测试环境
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/isc': '/isc'
        }
      }
    }
  }
};
