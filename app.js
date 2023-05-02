const express = require('express')

const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')
//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())
// express.urlencoded() is a middleware function that parses incoming requests with urlencoded payloads and is typically used for handling form data. It populates the req.body object with key-value pairs, where the values can be strings or arrays.
//routes
app.use('/api/people',people)
app.use('/login',auth)





//practice



app.listen(5000,()=> console.log("server started"))