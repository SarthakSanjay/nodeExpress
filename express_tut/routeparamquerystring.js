const express = require('express')
const {product , person} = require('./data')
const app = express()
app.get("/",(req , res)=>{
    res.send('<h1 style="color: red;">home </h1><a href="/api/products">products</a>')
})

// app.get('/api/products',(req, res)=>{
//     res.json(product)
// })
//what if i need only selective data from the json this is what i can do
app.get('/api/products',(req, res)=>{
    const newProduct = product.map((items)=>{
        const {id , product_name , product_price} = items
        return { id , product_name , product_price}
    })
    res.json(newProduct)
})
//what if i am looking for only one item in the product
// app.get('/api/products/1',(req, res)=>{
//     const singleProduct = product.find((items)=> items.id === 1)
//     res.json(singleProduct)
// })
// what if there are 100 product in data , it will be overwellming to write route of each product , to save this effort express has a thing called route parameter

//route parameter
app.get('/api/products/:productID',(req, res)=>{ // here productID is a placeholder
    // console.log(req.params)
    const {productID} =  req.params
    const singleProduct = product.find((items)=> items.id === Number(productID))
    //what if the product dont exist , we can set if block and send res 404 product not found
    if(!singleProduct){
        return res.status(404).send("Product not found")
    }
    res.json(singleProduct)
})
// route parameter can get complex
app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{ // here productID is a placeholder
    console.log(req.params) 
    res.send('hell rided by hell rider')
})
// lets do more complex routing

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search , limit} = req.query
    let sortedProduct = [...product]
    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.product_name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }
    if(sortedProduct < 1){
        // res.status(200).send('no product matched your search') // we cannot send response two times
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProduct)
    // res.send(`this is api query`)
})

app.listen(5000 , ()=>{
    console.log("app listening on port 5000...")
})