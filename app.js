const express = require('express')
const app = express()

// req => middleware => res
// req comes in , then we will do something (some kind of functionality), and then send response
const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url , time)
    next()
}
//always terminate or send back your res
app.get('/', logger,(req,res)=>{ //here logger is the middleware function
    
    res.send("home")
})
app.get('/about',logger,(req,res)=>{
    res.send("about")
})


app.listen(5000 , ()=>{
    console.log("app listening on port 5000...")
})