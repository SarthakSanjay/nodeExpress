// console.log(__dirname)
// console.log(__filename)
// console.log(module)
// console.log(process)

// const { greet , tell} = require("./module")
// const data = require('./module2')
// greet("sharko")
// tell("something")

// // console.log(items.items)
// // console.log(items.items[0])
// // console.log(items.items[1])
// console.log(data)
// require('./mindfuck')
// console.log("helloo");


const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("home")
    }

})

server.listen(5000,()=>{
    console.log("server started")
})