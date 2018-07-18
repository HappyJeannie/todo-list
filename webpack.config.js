const path = require('path');
//const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const webpack = require('webpack');

module.exports = {
  entry : './src/index.js',
  devtool : 'inline-source-map',
  devServer : {
    contentBase : './dist'
  },
  plugins : [
  ],
  output : {
    filename: 'bundle.js',
    path : path.resolve(__dirname,'dist')
  }
  
}