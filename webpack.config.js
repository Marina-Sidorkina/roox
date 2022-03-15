const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [['postcss-preset-env']],
        },
      },
    }];

  const getPlugins = () => {
    const plugins = [new HtmlWebpackPlugin({ template: 'public/index.html' })];

    if (isProd) plugins.push(new MiniCssExtractPlugin({ filename: 'main-[hash:8].css' }));

    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',

    entry: './src/index.jsx',

    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },

    devServer: {
      open: true,
      watchFiles: ['src/'],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devtool: 'source-map',

    module: {
      rules: [

        // BABEL
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },

        // IMAGES
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },

        // FONTS
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },

        // CSS
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },

        // SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },

        // LESS
        {
          test: /\.less$/i,
          use: [...getStyleLoaders(), 'less-loader'],
        },
      ],
    },

    plugins: getPlugins(),
  };
};
