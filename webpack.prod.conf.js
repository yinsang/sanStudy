const merge = require('webpack-merge')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

const merged =merge(baseConfig,{
  mode:'production',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new cleanWebpackPlugin('./client/dist')
  ]
})
module.exports = merged;