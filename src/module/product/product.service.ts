import { IProduct } from './product.interface'
import Product from './product.model'

// Create a new product
const createProduct = async (payload: IProduct) => {
  const data = new Product(payload)  
  const result = await data.save()  
  return result  
}

// Get all products
const getAllProducts = async () => {
  const result = await Product.find() 
  return result  
}

// Get a single product by ID
const getSingleProduct = async (productId: string) => {
  const result = await Product.findOne({ _id: productId })  
  return result  
}

// Update a product by ID
const updateProduct = async (productId: string, payload: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: productId }, payload, { 
    new: true, 
    runValidators: true, 
    context: 'query'  
  })
  return result   
}

// Delete a product by ID
const deleteProduct = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId })  
  return result  
}

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
