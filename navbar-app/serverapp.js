const http = require("http")
const {readFileSync} = require('fs')
const homepage = readFileSync("./navbar-app/index.html")
const homepageStyle = readFileSync("./navbar-app/style.css")
const logo = readFileSync("./navbar-app/logo.png")
const logic = readFileSync("./navbar-app/browser-app.js")

const server = http.createServer((req,res)=>{

    console.log(req.url)
  if(req.url === '/'){
    res.writeHead(200 ,{'content-type':"text/html"})
    res.write(homepage)
    res.end()
  }
  else if(req.url === '/style.css'){
    res.writeHead(200 ,{'content-type':"text/css"})
    res.write(homepageStyle)
    res.end()
  }
  else if(req.url === '/logo.png'){
    res.writeHead(200 ,{'content-type':"text/png"})
    res.write(logo)
    res.end()
  }
  else if(req.url === '/browser-app.js'){
    res.writeHead(200 ,{'content-type':"text/javascript"})
    res.write(logic)
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

// here we can see that we have to send all the necessary file
// imagine a scenario where we have tons of resources and we have to setup each one of them this will be an ambigous task so we use express instead
