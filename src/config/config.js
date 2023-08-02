require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  hostname: process.env.DB_HOST,
  database: process.env.DB,
  port: process.env.DB_PORT,
  dialect: 'mysql',
}

module.exports = {
  development: config,
  test: config,
  production: config
}