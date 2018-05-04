const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const merged =merge(baseConfig,{
  mode:'development',
  devServer: {
    contentBase: __dirname + '/client/dist',
    compress: true,
    port: 9000
  },
  resolve:{
    alias:{
      san:'san/dist/san.dev.js'
    }
  }
})
module.exports = merged;