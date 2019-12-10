require('inspector').open(1337, 'localhost');
require('http').createServer((req, res) => {
    const fs = require('fs');

    debugger;

    res.write("Hello from simple-server");
    res.end();
}).listen(8080);
console.log("Server listening on 8080");