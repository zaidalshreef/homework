const mongoose = require('mongoose');
const schema = mongoose.Schema

const ProductsSchema = new schema({
    productName: String,
    amount: Number,
    lastUpdated: {type: Date, default : Date.now},
    distributors: [String]
})

module.exports = mongoose.model('product', ProductsSchema)