var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'dev', 'plum.js'),
  output: {
    path: path.join(__dirname, 'build'),
    publicPath : '/build/',
    filename: 'plum.min.js',
    library : 'Plum',
    libraryTarget : 'umd',
    umdNamedDefine : true
  },
  module: {
    loaders: [
      {
        test: /\.font\.(js|json)$/,
        loader: 'style!css!fontgen?fileName=[fontname][ext]'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:   /\.js/,
        loader: 'babel',
        exclude : /(node_modules|assets)/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
}
