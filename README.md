# curious-api #

### A rest api to access multiple databases. ###

[![Build Status](https://travis-ci.org/jerrythomas/curious-api.svg?branch=travis)](https://travis-ci.org/jerrythomas/curious-api/)
[![Coverage Status](https://coveralls.io/repos/github/jerrythomas/curious-api/badge.svg)](https://coveralls.io/github/jerrythomas/curious-api)
[![Dependency Status](https://david-dm.org/jerrythomas/curious-api.svg)](https://david-dm.org/jerrythomas/curious-api)
[![devDependency Status](https://david-dm.org/jerrythomas/curious-api/dev-status.svg)](https://david-dm.org/jerrythomas/curious-api#info=devDependencies)

[![NSP Status](https://nodesecurity.io/orgs/jerrythomas/projects/16e8ceba-7614-41fe-843d-8a03294736db/badge)](https://nodesecurity.io/orgs/jerrythomas/projects/16e8ceba-7614-41fe-843d-8a03294736db)
[![Known Vulnerabilities](https://snyk.io/test/github/jerrythomas/curious-api/badge.svg)](https://snyk.io/test/github/jerrythomas/curious-api)
Version 0.0.1

## Goals

* Create and use connections to multiple databases
* Store snippets of code for each technology
* Search within snippets of code
* Execute the snippet of code
* Fetch results in a paginated result set 

## Getting Started ##

### Prerequisites
For connecting to oracle database, oracle libraries must be installed. Refer [node-oracledb](https://github.com/oracle/node-oracledb/blob/master/INSTALL.md)

```bash
git clone https://github.com/jerrythomas/curious-api
cd curious-api
npm install
npm start
```

Navigate to `http://localhost:8000/`. 

## Running unit tests

Run `npm test` to execute the unit tests.

## Related

Check out [curious-app](https://github.com/jerrythomas/curious-app) for an angular app using these api. 