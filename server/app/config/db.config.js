module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Sample#123",
    DB: "dsmp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };