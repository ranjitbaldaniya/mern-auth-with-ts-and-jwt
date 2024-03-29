// routes/productRoutes.js

import express from "express";
import { createMultipleProducts, createProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from "../controller/productController.js";


export const productRoutes = express.Router();

// Create a new product
productRoutes.post("/create", createProduct);

// Create multiple products
productRoutes.post("/create-multiple", createMultipleProducts);

// Update a product
productRoutes.put("/update/:id", updateProduct);

// Get all products
productRoutes.get("/getall", getAllProducts);

// Get product by ID
productRoutes.get("get/:id", getProductById);

// Delete product by ID
productRoutes.delete("delete/:id", deleteProductById);

