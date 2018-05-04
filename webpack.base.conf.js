const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack');
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
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test:/\.js$/,
        use:['babel-loader']
      },
    ]
  },
  resolve:{
    extensions: ['.js'],
  },
  plugins:[
    new WebpackOnBuildPlugin(()=>{
      console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      title:'hello',
      filename: 'index.html',
      chunks:['index'],
      template: './client/src/index.html'
    }),
  ],
}