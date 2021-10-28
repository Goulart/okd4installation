  // Database config 
  module.exports = {
    DB_HOST: (process.env.MYSQL_REST_SVC_SERVICE_HOST || 'localhost'),
    DB_USER_NAME: (process.env.MYSQL_USER || 'restappu'),
    DB_PASSWORD: (process.env.MYSQL_PASSWORD || 'mypa55'),
    DB_NAME: (process.env.MYSQL_DATABASE || 'nodeApi_DB')
  };
