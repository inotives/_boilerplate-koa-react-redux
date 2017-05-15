const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  srcDir: __dirname + '/src',
  nodeDir: __dirname + '/node_modules',
  bowerDir: __dirname + '/bower_components',
  libDir: __dirname + '/libs', // third pt libs, just in case need them
  styleDir: __dirname + '/src/_styles',
  assetDir: __dirname + '/src/_assets',
  imgDir: __dirname + '/public/images',
  distDir: __dirname + '/public'
}

const config = {
    context: PATHS.srcDir, // define the starting directory for the webpack to look for
    resolve: {
      alias: {
        mainSCSS: PATHS.styleDir + '/main.scss'
      }
    },
    entry: {
      app: './index.js'
    },
    output: {
      path: PATHS.distDir,
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/, include: PATHS.srcDir,
          use: [
            { loader: 'babel-loader', options: { presets: [ ['es2015', { modules: false }] ] } }
          ]
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"] // equate to: styleLoader(cssLoader(sassLoader('source')))
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/, include: PATHS.imgDir,
          use: [
            {loader: "url-loader?limit=1000&name=images/img_[hash].[ext]" } // convert the images that is <10k to base64 string
          ]
        },
        // {
        //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        // },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?outputPath=fonts'
        }
      ]
    },
    plugins: [
      // generate index.HTML file
      new HtmlWebpackPlugin({
          title: "ReactAppBasic",
          template: "index.ejs", // custom template
          inject: 'body' // inject all scripts tag to body
      }),
      // Chunking the common codes
      new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons.js'
      }),
      new CopyWebpackPlugin([
        {from: PATHS.assetDir+'/images', to: PATHS.imgDir}
      ]),
      new ExtractTextPlugin('bundle.css')
    ]
}

module.exports = config
