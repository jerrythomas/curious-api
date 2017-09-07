const Hapi = require('hapi');
const Joi = require('joi');
const pgConn = require('hapi-postgres-connection');

const server = new Hapi.Server();

require('env2')('.env'); // loads all entries into process.env
DATABASE_URL=process.env.DATABASE_URL

server.connection({
  port: process.env.PORT,
  host: 'localhost',
});

server.register({ // register all your plugins
  register: pgConn, // no options required
}, (err) => {
  if (err) {
    console.error(err);
  }
});

server.route({
  method: 'GET',
  path: '/api/v1/{user*}',
  config: { // validate will ensure YOURNAME is valid before replying to your request
    validate: {
      params: {
        user: Joi.string()
          .min(2)
          .max(40)
          .alphanum()
          .required(),
      },
    },
    handler(req, reply) {
      reply(`Hello ${req.params.user}!`);
    },
  },
});

server.route({
  method: 'GET',
  path: '/api/v1/postgres',
  config: {
    handler(request, reply) {
      const payload = request.headers;
      console.log(payload);

      request.pg.client.query(payload.query, (err, result) => {
        console.log(err, result);
        return reply(result.rows[0]);
      });
    },
  },
});

module.exports = server;
