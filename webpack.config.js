import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __dirname = path.resolve();

export default {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      template: './src/index.html',
      filename: 'index.bundle.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['/' + '/node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
    ],
  },
};
