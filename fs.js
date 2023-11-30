const { Console, log } = require('console');
const fs = require('fs');

//open-----------------------------------


// let closed =  
// fs.openSync('demo.txt','r+')
//     console.log('file open sucessfully.....!');

//close-----------------

//  fs.close(closed ,(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     console.log('file close')
//  })

//write---------------------------------

// const data = "Consider modules to be the same javascript libraries.  youwant to include in your application"

// fs.writeFileSync('abc.txt',data);
// console.log('file write sucess....')

// fs.writeFile('xyz.txt',data, (err,data)=>
// {
//     if(err){
//         console.log(err);

//     }
//     else
//     console.log('file write sucess....')
// });

//read---------------------------

// const txt = fs.readFileSync('demo.txt','utf-8');
// console.log(txt);

// fs.readFile('demo.txt','utf-8',(err,data)=>
// {
//    if(err){
//     console.log(err);
//    }
//    else{
//    console.log(data)}
// })

//Append----------------------------------

// const data =" youwant to include in your application"

// fs.appendFileSync('xyz.txt',data );
// console.log('file write sucess....')

// fs.appendFile('xyz.txt',data, (err,data)=>
// {
//     if(err){
//         console.log(err);

//     }
//     else
//     console.log('file write sucess....')
// });


//delet------------------------------

// fs.unlinkSync('abc.txt');
// console.log('file delet sucess....')

// fs.unlink('abc.txt',(err,data)=>
// {
//     if(err){
//         console.log(err);
//      }
//      else
//      console.log('file delet sucess...')
// })

//rename-------------------------------

// fs.renameSync('./xyz.txt','./abc.txt');
// console.log('rename')

// fs.rename('abc.txt','xyz.txt',(err)=>
// {
//     if(err){
//         console.log('rename');
//     }
//     else
//     console.log("rename not")
 
// });
