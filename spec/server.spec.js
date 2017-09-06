const test = require('tape');
const server = require('../server/server.js');

test('Negative - GET /', (t) => { // t
  const options = {
    method: 'GET',
    url: '/',
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 404);
    t.equal(response.result.error, 'Not Found');
    server.stop(t.end);
  });
});

test('Positive - GET /api/v1/{user*}', (t) => { // t
  const options = {
    method: 'GET',
    url: '/api/v1/Timmy',
  };

  server.inject(options, (response) => {
    t.equal(response.statusCode, 200);
    t.equal(response.result, 'Hello Timmy!');
    server.stop(t.end);
  });
});

test('Negative - GET /api/v1/{user*}', (t) => { // t
  const options = {
    method: 'GET',
    url: '/api/v1/This is longer than 40 characters',
  };
  server.inject(options, (response) => {
    t.equal(response.statusCode, 400);
    t.equal(response.result.error, 'Bad Request');
    server.stop(t.end);
  });
});
