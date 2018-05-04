const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry:{
    index:'./client/src/index.js',
  },
  output:{
    filename:'[name][id].bundle.js',
    path:__dirname + '/client/dist'
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  resolve:{
    extensions: ['.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'hello',
      filename: 'index.html',
      chunks:['index'],
      template: './client/src/index.html'
    }),
    new VueLoaderPlugin()
  ],
}