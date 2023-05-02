const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (request , response)=>{

    response.status(200).sendFile(path.join(__dirname, '../index.html'))
})

const NAME = []

router.post('/',(req,res)=>{
    const {name} = req.body
    NAME.push(name)
    console.log(name)
    console.log(req.body)
    console.log(NAME)
    if(!name){
        return res.status(400).send("please provide name")
    }
   
    res.status(200).send(`you are logged in ${name}`)
})

module.exports = router