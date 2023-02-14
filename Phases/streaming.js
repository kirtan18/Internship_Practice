const fs = require('fs');
const http = require('http'); 
const server = http.createServer();

server.on('request' , (req,res) =>{
  fs.readFile('input.txt' , function(err,data){
    if(err) return console.log(err);
    res.end(data.toString());
  });
});


// Payload header = reconstruction of the original resource

const rstream = fs.createReadStream("input.txt");

rstream.on('data' , (chunkData)=>{
     res.write(chunkData);
});
rstream.on('end' , ()=>{
    res.end();
});

server.listen(8000); 


// Pipe
// if we want to read along with write data then we use pipe methods
const rStream = fs.createReadStream("input.txt");
rStream.pipe(res);
