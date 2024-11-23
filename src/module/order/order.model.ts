import { model, Schema } from 'mongoose'

// order model 
const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
      unique: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'products',
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1.'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive value.'],
    },
  },
  { timestamps: true }
);

const Order = model('Order', orderSchema);

export default Order;