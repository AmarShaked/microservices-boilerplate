module.exports = {
  apps : [
    {
      name      : 'Proxy service',
      script    : 'proxy-service'
    },
    {
      name      : 'Auth service',
      script    : 'auth-service',
    },
    {
      name      : 'Web Service',
      cwd       : 'web-service',
      script    : './node_modules/react-scripts/bin/react-scripts.js',
      args      : ["start"]
    }
  ],
};
