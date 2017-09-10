'use strict';

class PostgresDB{

    constructor(options) {

        this.url  = options.url;
        this.user = options.user;
        this.password = options.password;
    }

    open(){

        console.log(`Opening connection to ${this.url}`);
    }

    close(){

        console.log(`Closing connection to ${this.url}`);
    }

    command(query){

        console.log(`executing command ${query}`);
    }
}

module.exports = PostgresDB;
