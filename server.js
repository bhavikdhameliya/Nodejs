const http = require('http');
const fs = require('fs');

const index = fs.readFileSync("index.html","utf-8");

const server = http.createServer();
server.on('request',(req,res)=>{
    res.setHeader("content_type",'text/html');
    res.end(index);
});
       

server.listen(5050,(err)=>{
    if(err){
        console.log(err);
    }else
    console.log("server started....")
});