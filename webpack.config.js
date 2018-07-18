const path = require('path');
//const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const webpack = require('webpack');

module.exports = {
  entry : './src/index.js',
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true // set to true if you want JS source maps
  //     })
  //   ]
  // },
  plugins : [
    
    // new UglifyJsPlugin({
    //   test: /\.js($|\?)/i,
    //   uglifyOptions:{

    //   }
    // })
    // new webpack.optimize.minimize({
    //   compress: {
    //       warnings: false
    //    }
    // })
  ],
  output : {
    filename: 'bundle.js',
    path : path.resolve(__dirname,'dist')
  }
  
}