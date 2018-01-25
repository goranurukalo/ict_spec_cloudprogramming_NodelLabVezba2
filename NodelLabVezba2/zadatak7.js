var fs = require("fs");
var http = require("http");

var customUrl = process.argv[2];
var userFile = fs.createWriteStream("./files/zadatak7.txt");

var options = {
    host: customUrl,
    method: 'GET'
};

var req = http.request(options, function (res) {
    res.pipe(userFile);
});
req.end();