module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/track_everything_else'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
