var http = require('http');
let fs = require('fs');
let url = require('url')

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
// let server = http.createServer(handleRequest);
// function handleRequest(req,res){
//   res.end("hello")
// }
// server.listen(5555)

// 2. Write script to create a server,
//  send in response the request headers 
// and add listener on port 6666.
// let server = http.createServer(handleRequest);
// function handleRequest(req,res){
//   let headers__ = JSON.parse(req.headers)
//   res.end(headers__)
  
// }
// server.listen(6666)

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.
// let server = http.createServer(handleRequest);
// function handleRequest(req,res){
//   console.log(req.method)
//   res.end();
  
// }
// server.listen(3001)
// 4. create a server
  // - set response headers as 'text/html' 
  // using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  // let server = http.createServer(handleRequest);
  // function handleRequest(req,res){
  //   res.setHeader("Content-Type","text/html")
    
  //   res.end("<h1>Hello world</h1>");
    
  // }
  // server.listen(5300)

// 5. create a server
  // - create a seperate file index.html and
  //  write some html content
  // - read the html file content and 
  // send it in response in createServer method
  // - don't forget to set header before writing 
  // to response

  // let server = http.createServer(handleRequest);
  // function handleRequest(req,res){
  //   let file = fs.readFileSync('./index.html')
  //   res.setHeader("Content-Type","text/html")
  //   res.end(file)
    
    
  // }
  // server.listen(5300)

// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  // let server = http.createServer(handleRequest);
  // function handleRequest(req,res){
  //   if(req.url === "/"){
  //     re.setHeader('Content-Type',"text/html")
  //     res.end("index page loaded")
  //   }
  //   else if(req.url === "/about"){
  //     re.setHeader('Content-Type',"text/html")
  //     res.end("about page loaded")
  //   }else if(req.url === "/contact"){
  //     re.setHeader('Content-Type',"text/html")
  
  //     res.end("contact page loaded")
  //   }
  //   else
  //   res.end("page not found")
    
    
  // }
  // server.listen(5300)

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response
  // let server = http.createServer(handleRequest)
  // let store = ""
  // function handleRequest(req,res){
  //   req.on('data',chunk=>{
  //     store+=chunk
  //   })
  //   req.on('end',()=>{
  //     if(req.method === "POST"){

  //       res.end(store+" done")
  //     }
  //   })
  // }
  // server.listen(4344)

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response
  // let server = http.createServer(handleRequest)
  // let store = ""
  // function handleRequest(req,res){
  //   req.on('data',chunk=>{
  //     store+=chunk
  //   })
  //   req.on('end',()=>{
  //     if(req.method === "POST"){
  //       let ve = JSON.parse(store)
  //       res.end(store + " done")
  //     }
  //   })
  // }
  // server.listen(4344)

  

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response
  // const querystring = require('querystring');
  // let server = http.createServer(handleRequest)
  // let store = ""
  // function handleRequest(req,res){
  //   req.on('data',chunk=>{
  //     store+=chunk
  //   })
  //   req.on('end',()=>{
  //     if(req.method === "POST"){
  //       let ve = querystring.parse(store)
  //       // console.log(JSON.stringify(ve))
  //       res.end(JSON.stringify(ve))
  //     }
  //   })
  // }
  // server.listen(4344)

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response
  let server = http.createServer(handleRequest)
  let store = ""
  function handleRequest(req,res){
    req.on('data',chunk=>{
      store+=chunk
    })
    req.on('end',()=>{
      if(req.method === "POST"){
        let parsedUrl = url.parse(req.url,true)
        res.end(parsedUrl.path)
      }
    })
  }
  server.listen(7000)

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node


  var path = require('path');
  var pathAbs = path.join(__dirname,'theory.md');
  console.log(pathAbs)
  var pathRel = path.relative(__dirname,'theory.md')
  console.log(pathRel);