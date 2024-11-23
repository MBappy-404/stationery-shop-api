
 # Stationery Shop API

## Overview

 

The **Stationery Shop API** is a server-side application that provides an API for managing a stationery store's products and orders. It allows the management of inventory, placing orders, and calculating revenue from all orders. The API is built using **Node.js**, **Express**, **MongoDB**, and **TypeScript**.

This application uses **Mongoose** for object data modeling (ODM) to handle interactions with the MongoDB database. The API exposes endpoints for managing products, placing orders, and calculating revenue from all orders. It is designed to serve as the backend for a stationery shop, handling the sale of various stationery items such as notebooks, pens, and other office supplies.

---

## Key Features

- **Product Management**: Create, read, update, and delete stationery products.
- **Order Management**: Place orders and adjust inventory based on sales.
- **Revenue Calculation**: Calculate total revenue from all orders.
- **Data Validation**: Ensures product and order data integrity using Mongoose schemas.
- **Error Handling**: Structured error responses for failed requests.

---

## Technologies Used

- **Node.js**: Backend runtime environment for JavaScript.
- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: For type safety and improved code maintainability.
- **MongoDB**: NoSQL database to store products and orders.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Manages environment variables for configuration.
- **Prettier & ESLint**: Used for code formatting and maintaining quality.

---

## API Endpoints

### 1. **Create a Stationery Product**
- **Endpoint**: `/api/products`
- **Method**: `POST`
 
  
### 2. **Get All Stationery Products**
- **Endpoint**: `/api/products`
- **Method**: `GET`
 
  
### 3. **Get a Specific Stationery Product**
- **Endpoint**: `/api/products/:productId`
- **Method**: `GET`
 

### 4. **Update a Stationery Product**
- **Endpoint**: `/api/products/:productId`
- **Method**: `PUT`
 

### 5. **Delete a Stationery Product**
- **Endpoint**: `/api/products/:productId`
- **Method**: `DELETE`
 

### 6. **Order a Stationery Product**
- **Endpoint**: `/api/orders`
- **Method**: `POST`
 

### 7. **Calculate Revenue**
- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`
 

---

## Project Setup

### Installation

- express
- typescript
- mongoose
- lint
- dotenv
- vercel
- eslint

### Links

Steps to get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MBappy-404/stationery-shop-api

2. Access the live API 
   link -> https://stationery-shop-dev.vercel.app/