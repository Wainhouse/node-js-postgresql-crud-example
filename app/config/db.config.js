module.exports = {
  HOST: "localhost",
  USER: "ubuntu",
  PASSWORD: "password",
  DB: "test_app",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
