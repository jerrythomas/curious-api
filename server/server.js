'use strict';
// loads all entries into process.env
const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();

require('env2')('.env');    

server.connection({ 
    port: process.env.PORT, 
    host: 'localhost' 
});

server.route({
	method: 'GET',
	path: '/api/v1/{user*}',
	config: {  // validate will ensure YOURNAME is valid before replying to your request
		validate: {
			params: {
				user: Joi.string().min(2).max(40).alphanum().required()
			}
		},
		handler: function (req,reply) {
			reply('Hello '+ req.params.user + '!');
		}
	}
});

module.exports = server;

