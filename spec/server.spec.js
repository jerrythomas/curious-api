var test   = require('tape');
var server = require("../server/server.js");

test("Negative - GET /", function(t) { // t
	var options = {
		method: "GET",
		url: "/"
	};
	server.inject(options, function(response) {
		t.equal(response.statusCode, 404);
		t.equal(response.result.error, "Not Found");
		server.stop(t.end);
	});
});

test("Positive - GET /api/v1/{user*}", function(t) { // t
	var options = {
		method: "GET",
		url: "/api/v1/Timmy"
	};
	
	server.inject(options, function(response) {
		t.equal(response.statusCode, 200);   
		t.equal(response.result, "Hello Timmy!"); 
		server.stop(t.end);
	});
});

test("Negative - GET /api/v1/{user*}", function(t) { // t
	var options = {
		method: "GET",
		url: "/api/v1/This is longer than 40 characters"
	};
	server.inject(options, function(response) {
		t.equal(response.statusCode, 400);
		t.equal(response.result.error, "Bad Request");
		server.stop(t.end);
	});
});