module.exports = {
  entry: './src/index.js',
  target: 'async-node', // Improved performance in node version 6+
  output: {
    filename: './dist/bundle.js',
    libraryTarget: 'commonjs2' // @TODO Do we need a libraryTarget option?
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            // plugins: [require('babel-plugin-inline-import')]
          }
        }
      }
    ]
  },
  devtool: 'source-map'
}
