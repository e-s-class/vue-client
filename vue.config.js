module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: { // proxyTable 설정
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        source: false,
      },
    },
  },
};
