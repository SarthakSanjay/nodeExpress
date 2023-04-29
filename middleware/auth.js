const auth = (req, res,next) =>{
    // console.log('authorized')
    const {user} = req.query
    if(user === 'john'){
        req.query = {name :"john" , id: 3}
        next()

    }else{
        res.status(401).send("unauthorized")
    }
}

module.exports = auth