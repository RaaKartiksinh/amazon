const express = require('express')
const productController = require('./productControler')
const productRouter = express.Router()


// productRouter.post('/insert',productController.insertProducts)
productRouter.get('/', productController.getProduct)
productRouter.post('/:id', productController.getProductId)






module.exports = productRouter