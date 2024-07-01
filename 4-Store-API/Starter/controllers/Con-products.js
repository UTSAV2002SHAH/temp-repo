const Product = require('../models/products-schemas')



const getAllProducts = async (req,res) =>{
    const { Featured } = req.query
    const queryObj = {}

    if(Featured) {
        queryObj.Featured = Featured === 'true'? true:false
    }
    console.log(queryObj);
    const product = await Product.find(queryObj)
    res.status(200).json({ product, nbHits: product.length })
}


const getAllProductsStatic = async (req,res) =>{
    const product = await Product.find({ Featured: false })
    res.status(200).json({ product, nbHits: product.length })
}




module.exports = {
    getAllProducts,
    getAllProductsStatic
}