var config = {
   entry: './public/budmax/js/budmax.js',

   output: {
      path:'./public/budmax/js',
      filename: 'bundle.js'
   },

   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
     ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
module.exports = config;
