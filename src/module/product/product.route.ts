import { Router } from "express";
import { ProductController } from "./product.controller";

const productRoute  = Router();
// product all routes 
productRoute.post('/', ProductController.createProduct)
productRoute.get('/', ProductController.getAllProducts)
productRoute.get('/:productId', ProductController.getSingleProduct)
productRoute.put('/:productId', ProductController.updateProduct)
productRoute.delete('/:productId', ProductController.deleteProduct)

export default productRoute;