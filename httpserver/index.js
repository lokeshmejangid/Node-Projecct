const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('hello form the other sie');
    }else if(req.url == '/aboutus') {
        res.end('about');
    }else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end('error');
    }
    
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listing to the port num 8000");
})