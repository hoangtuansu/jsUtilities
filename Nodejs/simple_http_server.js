var http = require('http');
var nStatic = require('node-static');

var file = new (nStatic.Server)();

var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        if (request.url.startsWith('/demo/test')) {
            response.writeHead(200, { "Content-Type": "application/json" });
            try {
                var content = JSON.stringify({'demo':123});
                response.end(content);
            } catch (e) {
            }
        }
    } else if (request.method == 'POST') {
        if (request.url == '/tcsep/home/persist') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<!doctype html><html><head><title>response</title></head><body>');
            response.write('Successfully done!');
            response.end('</body></html>');
        }
    }
    file.serve(request, response);
});

server.listen(8080, function () { });
