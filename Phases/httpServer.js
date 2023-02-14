var http = require('http');
var url = require('url');

// Creating HTTP Server
// Returning Content
// Serving HTML Page from a File
// Handling Routes by HTTP Request Object

//Add Http Header
http.createServer((req,res) =>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

//Read Query String
http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end();
  }).listen(8080);

// Split the Query String
http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = q.year + " " + q.month;
    // res.write(req.url);
    res.end(txt);
  }).listen(8080);

//! HTTPS 

var https = require('https');

https.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello world');
    res.end();
}).listen(8000);

//Get Request

https.get('https://google.com', (req,res) =>{
    console.log('statuscode' , res.statusCode);
    console.log('headers' , res.headers);
    
    res.on('data' , (d) =>{
        res.write(d);
    });
    res.on('end' , ()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
    res.on('error' , (e) =>{
        console.log(e);
    });
});


