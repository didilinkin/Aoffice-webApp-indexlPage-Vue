var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: 'webapp_index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            sass: "vue-style-loader!css-loader!sass?indentedSyntax"
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=100000&name=img/[name].[ext].[hash:8]'
      },
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue'
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
