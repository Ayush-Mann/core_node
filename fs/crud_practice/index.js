let http = require('http')
let fs = require('fs');
let url = require('url')
let path = require('path')

let store = "";
let server = http.createServer(handleRequest)
function handleRequest(req,res){
	req.on('data',(chunk)=>{
			store += chunk
	})
	req.on('end',()=>{
		// let username = req.url.

		// parsedPath = __dirname+""
		let username = store?JSON.parse(store).username	:""
		parsedUrl = url.parse(req.url,true)
//CREATE 
		if((req.method === "POST")&&(parsedUrl.pathname ==="/users")){
			// let username = 
			// console.log("post")
			// res.end("post successfully")
			fs.open((__dirname+"/"+username+".json"),"wx",(err,fd)=>{
				if(err){
					res.end("error fsopen")
				}
				else{
					fs.writeFile(fd,store,(err)=>{
						if(err) res.end("error writefile")
						fs.close(fd,()=>{
							res.end("Posted successfully")
						})
					})
				}
			})
		}
// READ
		if(req.method ==="GET" && parsedUrl.pathname ==='/users'){
			let username = parsedUrl.query.username
			fs.createReadStream(__dirname+"/"+username+".json").pipe(res)

		}
//UPDATE 
		if(req.method === "PUT" && parsedUrl.pathname ==='/users'){
			let username = parsedUrl.query.username
			fs.open((__dirname+"/"+username+".json"),"r+",(err,fd)=>{
				if(err){
					res.end('fsopen error')
				}
				else{
					fs.ftruncate(fd,(err)=>{
						if(err) res.end("ftruncate error")
						fs.writeFile(fd,store,(err)=>{
							if(err){
								res.end("write file error")
							}else{
								fs.close(fd,()=>{
									res.end("UPDATED SUCCESFULLY")
								})
							}
						})
						
					})
				}
			}) 
		}
	// DELETE
		else if(req.method === "DELETE" && parsedUrl.pathname ==='/users'){
			let username = parsedUrl.query.username
			fs.unlink((__dirname+"/"+username+".json"),(err)=>{
				if(err){
					res.end("err in delete")
				}else{
					res.end("err successful")
				}
			})
		}


		
	})
    
}

server.listen(7500);