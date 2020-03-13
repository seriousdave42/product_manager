const ProductController = require("../controllers/product.controllers");

module.exports = app => {
  app.get("/api/products/", ProductController.index);
  app.post("/api/product/create", ProductController.createProduct);
  app.get("/api/product/:id", ProductController.findOneProduct);
  app.put("/api/product/:id/update", ProductController.updateProduct);
  app.delete("/api/product/:id/destroy", ProductController.deleteProduct);
};