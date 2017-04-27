module.exports = {
  apps : [
    {
      name      : 'Api Gateway',
      script    : 'api-gateway'
    },
    {
      name      : 'Auth service',
      script    : 'auth-service',
    },
    {
      name      : 'Web Service',
      cwd       : 'web-service',
      detached  : false,
      script    : './node_modules/react-scripts/bin/react-scripts.js',
      args      : ["start"]
    }
  ],
};
