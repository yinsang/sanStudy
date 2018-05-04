const merge = require('webpack-merge')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

const merged =merge(baseConfig,{
  mode:'production',
  resolve: {
    alias: {
      san:'san/dist/san.js'
      
    }
  },
  plugins:[
    new cleanWebpackPlugin('./client/dist')
  ]
})
module.exports = merged;