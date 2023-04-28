const express = require('express')
const path = require('path')
const app = express()
//setup static and middleware
app.use(express.static('./navbar-app')) // common convention is that all the static files are kept in public folder but here i am using the navbar-app folder
//static assest are the files that server doesn't have to change
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//since all the index.html is also a static asset we dont need to specify it here for now
app.all('*',(req,res)=>{
    res.status(404).send("<h1>resource not found : error 404</h1>")
})
app.listen(5001,()=>{
    console.log("app listening on port 5001")
})