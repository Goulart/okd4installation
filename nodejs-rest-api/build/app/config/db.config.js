  // Database config 
  module.exports = {
    DB_HOST: (process.env.MYSQL_REST_SVC_SERVICE_HOST || 'localhost'),
    DB_USER_NAME: (process.env.MYSQL_REST_USER || 'restappu'),
    DB_PASSWORD: (process.env.MYSQL_REST_PASSWORD || 'mypa55'),
    DB_NAME: (process.env.MYSQL_REST_DATABASE || 'nodeapi_db')
  };
