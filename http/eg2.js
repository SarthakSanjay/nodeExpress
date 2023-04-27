const http = require("http")
const {readFileSync} = require('fs')
const homepage = readFileSync("./index.html")
const server = http.createServer((req,res)=>{
  // console.log(req.method)
  // console.log(req.url)
  // res.writeHead(200 ,{'content-type':"text/html"})
  //   res.write("<h1>home page</h1>")
  //   res.end()
  if(req.url === '/'){
    res.writeHead(200 ,{'content-type':"text/html"})
    res.write(homepage)
    res.end()
  }
 else if(req.url === '/about'){
  res.writeHead(200 ,{'content-type':"text/html"})
  res.write("<h1>about page</h1>")
  res.end()
  }
  else if(req.url === "/api/data/server"){
    res.writeHead(200 ,{'content-type':"text/html"})
    res.write("<h1>data page</h1>")
    res.end()
  }
  else{
    res.writeHead(404 ,{'content-type':"text/html"})
    res.write("<h1>not found</h1>")
    res.end()
  }
})

server.listen(5000)

