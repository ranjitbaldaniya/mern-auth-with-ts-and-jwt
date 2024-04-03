import { Cart } from "../models/CartModal.js";

export const createCartController = async (req, res) => {
  try {
    const payload = req.body;

    const cart = Cart.create(payload);

    res.status(201).send(cart);
  } catch (error) {
    console.log("error while creating cart", error);
  }
};

// Get Cart by ID
export const getCartByID = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const updateCart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Cart by ID
export const deleteCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findByIdAndDelete(id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(201).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
