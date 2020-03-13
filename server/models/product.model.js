const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    prodName: {type: String},
    prodPrice: {type: Number},
    prodDesc: {type: String}
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;