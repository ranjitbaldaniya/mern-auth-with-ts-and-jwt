import express from "express";
import {
  createCartController,
  deleteCartById,
  getCartByID,
  updateCartById,
} from "../controller/cartCOntroller";

export const cartRoute = express.Router();

cartRoute.post("/create-cart", createCartController);

cartRoute.get("/get-cart-by-id/:id", getCartByID);

cartRoute.put("/update-cart-by-id/:id", updateCartById);

cartRoute.delete("/delete-cart-by-id/:id", deleteCartById);
