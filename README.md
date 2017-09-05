# curious-api #

### A rest api to access multiple databases. ###

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

Navigate to `http://localhost:4200/`. 

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Related

Check out [curious-app](https://github.com/jerrythomas/curious-api) for an angular app using these api. 