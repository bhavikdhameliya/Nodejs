const http = require('http');
const { connect } = require('http2');
const server = http.createServer((req,res)=>
{
        res.setHeader("connect-type","text/html");
   res.end("hello world two" );
 });

server.listen(9090,(err)=>
{
    if(err){
        console.log(err);

    }
    else
{
    console.log("server started....")
}
});