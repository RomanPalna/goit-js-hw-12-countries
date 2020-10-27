const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    
    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    
    output: {
    path: path.resolve(__dirname, './build'),
    filename: 'my.bundle.js'
    },

    module: {
        rules: [
            {
        test: /\.scss$/i,
                use: ['style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'],
            },

            {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader'],
    } 
        ]
    },

    devServer: {
        open: true,
        port: 8080,
        stats: "errors-only",
    },
    
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        
        new MiniCssExtractPlugin({
      attributes: {
        id: 'target',
        'data-target': 'example',
      },
    }),
    ],
    
 }