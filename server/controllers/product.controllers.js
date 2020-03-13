const Product = require('../models/product.model');

module.exports.index = (req,res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err}));
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct}))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err}));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json({ product: product }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json({ updatedProduct: updatedProduct }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err}));
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(confirmation => res.json({ deleteConfirmation: confirmation}))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err}));
};