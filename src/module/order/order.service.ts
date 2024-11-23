 
import { IOrder } from './order.interface'
import Order from './order.model'

const createOrder = async (payload: IOrder) => {
  const data = new Order(payload)
  const result = await data.save()
  return result
}

// calculate  total revenue
const calculateRevenueOrders = async () => {
  const result = await Order.aggregate([
    {
      $group: { _id: null, totalPrice: { $sum: '$totalPrice' } },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ])
  return result
}

export const OrderService = {
  createOrder,
  calculateRevenueOrders,
}
