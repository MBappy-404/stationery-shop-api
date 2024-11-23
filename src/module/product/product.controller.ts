import { Request, Response } from 'express'
import { ProductService } from './product.service'

// Create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body  
    const result = await ProductService.createProduct(data)  
    res.status(200).json({
      success: true,
      message: 'Product created successfully',  
      data: result,  
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An unexpected error occurred',  
      error: error,  
      stack: error.stack, 
    })
  }
}

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProducts()  

    res.status(200).json({
      success: true,
      message: 'Product list retrieved successfully.', 
      data: result, 
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An unexpected error occurred',  
      error: error,  
      stack: error.stack,  
    })
  }
}

// Get a single product by ID
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId 
    const result = await ProductService.getSingleProduct(id)  
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully.',  
      data: result,  
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An unexpected error occurred',  
      error: error,  
      stack: error.stack,  
    })
  }
}

// Update an existing product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId  
    const body = req.body  
    const result = await ProductService.updateProduct(id, body)  
    res.status(200).json({
      success: true,
      message: 'Product updated successfully.',  
      data: result,  
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An unexpected error occurred',  
      error: error, 
      stack: error.stack, 
    })
  }
}

// Delete a product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId  
    const result = await ProductService.deleteProduct(id)  
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully.',  
      data: result,  
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An unexpected error occurred',  
      error: error, 
      stack: error.stack, 
    })
  }
}

// Export all the controller methods for use in routes
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
