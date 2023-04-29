const express = require('express')
const morgan = require('morgan')
const logger = require("./middleware")
const auth = require('./auth')
const app = express()

const greet = (req , res , next) =>{
    console.log("good night")
    next()
}
// req => middleware => res
// req comes in , then we will do something (some kind of functionality), and then send response
// const logger = (req,res,next) =>{
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method, url , time)
//     next()
// }
//always terminate or send back your res

// imagine a situation where i need to include middleware in each of the route , this will be overwelming
// express provides a method app.use(),it invoke for all the routes
// all app.use()should be on the top of the document
// we can provide path as argument to the app.use()
//below /api path is provided to the app.use(), doing this it will apply to all the /api routes
// e.g /api/home
// e.g /api/product
// e.g /api/product/items

// app.use('/api',logger) //by giving path it will only apply on the route starting with /api path only
//it will not get applied to home route '/' or any
// to apply we can do so
// app.use('/',logger)
// app.get('/', logger,(req,res)=>{ //here logger is the middleware function


// what if there is more than one middleware function , we simply put all these in an array

// app.use([logger , auth]) 
// app.use([auth , logger , greet]) 
// middleware function will be executed in order means if logger is first and auth is second it will execute in the same order as their position

app.use(morgan('tiny'))

app.get('/', (req,res)=>{ //here logger is the middleware function
    
    res.send("home")
})
// app.get('/about',logger,(req,res)=>{
app.get('/about',(req,res)=>{
    res.send("about")
})

app.get('/api/products',(req,res)=>{
    res.send("product page")
})

app.get('/api/items',(req,res)=>{
    res.send("items page")
})


app.listen(5000 , ()=>{
    console.log("app listening on port 5000...")
})