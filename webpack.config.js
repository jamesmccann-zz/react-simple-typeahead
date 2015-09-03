module.exports = {
  entry: './typeahead.js',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader?modules', exclude: 'node_modules' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: 'node_modules' }
    ]
  },
  externals: [{
    react: {
      root: 'React'
    }
  }],
  output: {
    filename: 'dist/react-simple-typeahead.js',
    libraryTarget: 'var',
    library: 'ReactSimpleTypeahead'
  }
};
