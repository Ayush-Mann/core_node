var fs = require('fs');
let http =require('http');

// Use fs module for all operatins below.
let server =  http.createServer(handleRequest)
function handleRequest(req,res){
  
}
server.listen(4300)

// 1. Write script to read file theory.md and console the output buffer.
// fs.readFile('./theory.md',(err,data)=>{
//   if(err) res.end("error ")
//   console.log(data)
//   res.end("success")
// })
// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.
  // fs.readFile('./theory.md',(err,data)=>{
  //   if(err) res.end("error ")
  //   let item = data.toString()
  //   console.log(item)
  //   res.end("success")
  // })

// 3. Write script to read file Synchronously and console the output.
// let file = fs.readFileSync('./theory.md',"utf8")
//   console.log(file)
  
// 4. Write script to create a file 'write.js' and write content of read.js in there.
// fs.readFile('./read.js',(err,data)=>{
//   if(err) res.end("error ")
//   fs.writeFile('newFile.txt',data.toString(),(err)=>{
//     res.end("error in write")
//   })
//   // console.log(item)
//   res.end("success")
// })

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// fs.open("./write.js","r+",(err,fd)=>{
//   if(err) res.end("open error")
//   fs.ftruncate(fd,(err)=>{
//     if(err) res.end("ftruncate error")
//     fs.readFile('./theory.md',(err,data)=>{
//       if(err) res.end("read error")
//       fs.writeFile(fd,data,(err)=>{
//         if(err) res.end("write error")
//         res.end("Success finally")
//       })
//     })
    
//   })
// })
// 6. Delete the content of write.js using fs.unlink or unlinkSync method
// fs.unlink('./write.js',(err)=>{
//   if(err) res.end("unlink err")
//   res.end("success");
//   }
// )