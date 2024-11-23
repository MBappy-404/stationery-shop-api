import { Request, Response } from 'express'
import { OrderService } from './order.service'
import Product from '../product/product.model'

const createOrder = async (req: Request, res: Response) => {
  try {
    const { product: productId, quantity } = req.body

    // Check if product exists
    const product = await Product.findById(productId)

    if (!product) {
      res.status(400).json({
        message: 'Product not found',
      })

      return
    }

    // Validate stock availability
    if (product.quantity < quantity) {
      res.status(400).json({
        message: 'Opps! Product not in stock at the moment.',
      })

      return
    }

    // calculate total price
    const totalPrice = product.price * quantity
    const order = { ...req.body, totalPrice }

    // Create order
    const result = await OrderService.createOrder(order)

    // Update product quantity
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -quantity } },
      { new: true }
    )

    // Update inStock status
    if (updatedProduct?.quantity === 0) {
      await Product.findByIdAndUpdate(
        productId,
        { inStock: false },
        { new: true }
      )
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    })
  } catch (error: any) {
    // Handle errors
    res.status(404).json({
      success: false,
      message: error.message || 'An unexpected error occurred',
      error: error,
      stack: error.stack,
    })
  }
}

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.calculateRevenueOrders()

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result[0],
    })
  } catch (error: any) {
    // Handle errors
    res.status(404).json({
      success: false,
      message: error.message || 'An unexpected error occurred',
      error: error,
      stack: error.stack,
    })
  }
}
export const OrderController = {
  createOrder,
  calculateRevenue,
}
