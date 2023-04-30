const express = require('express')
const app = express()
const {person} = require('./middleware/data.js')
//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())
// express.urlencoded() is a middleware function that parses incoming requests with urlencoded payloads and is typically used for handling form data. It populates the req.body object with key-value pairs, where the values can be strings or arrays.

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    
    res.status(401).send('provide credentials')

})

app.get('/api/people', (req, res)=>{
    res.status(200).json({success: true, data:person})
})
app.post('/api/people',(req,res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false, MSG:'PLEASE PROVIDE NAME VALUE'})
    }
    res.status(201).json({success:true,person:name})
})
app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, MSG:'PLEASE PROVIDE NAME VALUE'})
    }
    res.status(201).json({success:true,data:[...person,name]})
})
//put method is for modifying data
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(id, name)
    res.send('sent')
})
app.listen(5000,()=> console.log("server started"))