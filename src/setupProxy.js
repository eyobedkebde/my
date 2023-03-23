const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/api", {
    target: "http://zibackend-env.eba-sv8nbbfm.us-east-2.elasticbeanstalk.com",
    changeOrigin: true
}));
};