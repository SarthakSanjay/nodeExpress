const express = require('express')
const {product , person} = require('./data')
const app = express()

app.get("/",(req , res)=>{
    res.json(product)
})

app.listen(5000 , ()=>{
    console.log("app listening on port 5000...")
})