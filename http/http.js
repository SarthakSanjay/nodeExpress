const http = require('http') //built-in module

const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.write('hello mofo')
    // res.end()
    if(req.url === '/'){
        res.end('hello mofo')
    }
    if(req.url === '/about'){
        res.end('this is about')
    }
    res.end(`
    <h1>Oops!</h1>
    <a href="/">back</a> 
    `)
})

server.listen(5000)