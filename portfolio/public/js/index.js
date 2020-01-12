var http = require('http');
var fs = require('fs');
var path = require('path');
// let pathName = __dirname + "/"

var server = http.createServer(requestHandler);

var publicPath = path.join(__dirname, '../..');
var publicCss =  path.join(__dirname, '../css');
var  mediaPath = path.join(__dirname, "..")
console.log(publicPath);
console.log(publicCss);
console.log(mediaPath)
function requestHandler(req, res) {
    console.log(req.url);
    
  // handle all html file together
  if(req.url === '/') {
    // set appropriate headers
    
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(publicPath+"/templates/index.html").pipe(res);
    // read file and send chunked data in response
    // fs.createReadStream(file_path).pipe(res);
    // for all css files
  } else if(req.url === '/portfolio'){
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(publicPath+"/templates/portfolio.html").pipe(res);
  }
  else if(req.url.includes('css')) {
    //handle css file here
    res.setHeader('Content-Type', 'text/css')
    fs.createReadStream(publicCss+"/style.css").pipe(res)

    // first set headers ie. 'text/css'
    // read css file and send it in response using createReadStream

    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop())>-1) {
      let ext = req.url.split('.').pop()
    //   console.log(ext)
    console.log(req.url)
      res.setHeader('Content-Type',`image/${ext}`)
      fs.createReadStream(mediaPath + req.url).pipe(res)
    //send images here with appropraite content type
  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}

server.listen(3000);