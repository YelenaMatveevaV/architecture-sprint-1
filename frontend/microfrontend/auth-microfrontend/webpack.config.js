const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // 1. Режим сборки (development/production)
    mode: isProduction ? 'production' : 'development',

    // 2. Точки входа
    entry: {
      main: './src/index.js' //,
    //  vendor: './src/vendor.js'
    },

    // 3. Выходные файлы
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]'
    },

    // 4. Модули и лоадеры
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader', 
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },

    // 5. Плагины
 //   plugins: [
 //     new CleanWebpackPlugin(),
   //   new HtmlWebpackPlugin({
     //   template: './src/index.html',
       // favicon: './src/favicon.ico'
//      }),
 //     new MiniCssExtractPlugin({
 //       filename: isProduction ? '[name].[contenthash].css' : '[name].css'
 //     })
 //   ],

    // 6. Настройки разработки
    devtool: isProduction ? false : 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true,
      open: true
    },

    // 7. Оптимизации
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },

    // 8. Настройки разрешения модулей
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };
};