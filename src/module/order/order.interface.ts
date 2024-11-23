import { Types } from 'mongoose';

// order interface
export interface IOrder {
  email: string
  product: Types.ObjectId
  quantity: number
  totalPrice: number
}
