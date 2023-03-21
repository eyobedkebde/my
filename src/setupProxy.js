const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/api", {
    target: "http://backendserver-env.eba-pmpfkpzk.us-east-1.elasticbeanstalk.com/api",
    changeOrigin: true
}));
};