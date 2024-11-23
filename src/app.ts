import express, { Request, Response } from 'express'
import productRoute from './module/product/product.route';
import orderRoute from './module/order/order.route';


 const app = express()

// middleware 
 app.use(express.json());


//  api routes 
app.use('/api/products', productRoute)
app.use('/api/orders',orderRoute)


 app.get('/', (req:Request, res:Response) => {

    res.send("Dev stationery shop server is running")

 })

 export default app