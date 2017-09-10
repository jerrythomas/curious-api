'use strict';

const PostgresDB = require('./postgres.js');
const Server = require('./server.js');

Server.route({
    method: 'GET',
    path: '/api/v1/{database}',
    config: {
        //postgres://username:password@localhost:port/database
        //driver://user:pass@hostname/database
        handler(req, reply) {

            reply(`Opening database connection to ${req.params.database}!`);
            const pg = new PostgresDB(req.options);
            pg.open();
        }
    }
});
