const express = require('express')
const app = express()
const path = require('path')

const {products} = require('./data.js')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})

app.get('/api/products/:productID', (req,res)=>{
    const { productID } = req.params
    //console.log(req.param)
    const singleProduct = products.find((product)=> product.id === Number(productID)) 
    //By default, URL parameters are treated as strings in Express.js. So we use Number() function
    
    if (!singleProduct) {
        // console.log(singleProduct)
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/vi/query', (req,res)=>{
    //console.log(req.query);

    const {search , limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true, data : []})
    }
    res.status(200).json(sortedProducts)
    res.send('hello wowwwrld')

})

app.listen(5000, ()=>{
    console.log('Server Listening on 5000 :')
})