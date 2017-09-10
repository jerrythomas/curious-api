'use strict';

require('./connect.js');
const Server = require('./server.js');

Server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${Server.info.uri}`);
});
