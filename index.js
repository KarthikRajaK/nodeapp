const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/person') {
        res.write(JSON.stringify({success: true, status: 200, data: { name: "karthikraja", mail: "karthikraja1994@hotmail.com" }}))
        res.end();
    }
});

server.listen(5000);

console.log('Listening on 5000');