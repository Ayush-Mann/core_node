//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.
// let fs = require('fs')
// let http =require('http')
// let server = http.createServer(handleRequest)
// function handleRequest(req,res){
//   fs.readFile(__dirname+"/theory.md",(err,data)=>{
//     if(err){
//       console.log("error")
//     }
//     else{
//       // res.setHeader("Content-Type","plain/text")
//       res.end(data)
//     }
//   })
  
// }
// server.listen(4320)

//6. Blocking code
 // Run it first and observe the output
  //  var file = fs.readfileSync('./theory.md');
  //  console.log(file);
  //  console.log('run me first');
  
 // change it to run it in non-blocking manner.
//  let file = fs.readFile("./theory.md",(err,data)=>{
//   if(err) res.end("error response")
//   console.log(data.toString())
//   res.end("success")
// })

 // Observe the difference in blocking and non-blocking code. 

// 10. require math.js
  // console const pie and add and multiply function.
  // let math = require('math.js')
  // console.log(math.pi, math.sum(1,2), math.multiply(2,4))

