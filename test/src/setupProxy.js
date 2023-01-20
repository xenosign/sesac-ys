const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.34.177.57/mongo/count',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
