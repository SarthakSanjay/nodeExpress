const express = require("express")
const app = express()



app.get('/',(req,res)=>{
    res.status(200).send(`
    <h1>home page</h1>
    <a href="/about">about</a>
    `)
})
app.get('/about',(req,res)=>{
    res.status(200).send("about page")
})
// manage 404
app.all("*",(req,res)=>{
    // res.status(404)
    // res.send("<h1>Resource not found</h1>")
    // we can chain them
    res.status(404).send("<h1>Resource not found</h1>")
})
app.listen(5000,()=>{
    console.log("server listening at port 5000")
})


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen