const {person} = require('../middleware/data')
const getPeople = (req, res)=>{
    res.status(200).json({success: true, data:person})
}

const createPeople = (req,res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false, MSG:'PLEASE PROVIDE NAME VALUE'})
    }
    res.status(201).json({success:true,person:name})
}

const createPeoplePostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, MSG:'PLEASE PROVIDE NAME VALUE'})
    }
    res.status(201).json({success:true,data:[...person,name]})
}

const updatePeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person  = person.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg: `no person with id ${id }`})
    }
    console.log(id, name)
    res.send('sent') 
}

const removePeople = (req,res) =>{
    const person  = person.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false, msg: `no person with id ${id }`})
    }
    const newPeople = person.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).send({success:true,data:newPeople})
}

module.exports ={
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    removePeople
}