const http = require('http');

//html link 

        const fs = require('fs');
        // const index = fs.readFileSync('index.html','utf-8');
        const data = fs.readFileSync('xyz.txt','utf-8');

//creat server------request//respons

        const server = http.createServer((req,res)=>
        { 
        //res.write('hello world')
        res.setHeader("connect-type","text/html");
        // res.end("Hello World One" );
        res.end(data);
        });

// creat pot

         server.listen(8080,(err)=>
         {
             if(err){
                 console.log(err);
         }else
         {
             console.log("server started....")
         }});