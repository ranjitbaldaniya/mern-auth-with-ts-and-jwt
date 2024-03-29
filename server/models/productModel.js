import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, },
        description: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array },
        color: { type: String },
        price: { type: Number, required: true },
        comparePrice: { type: Number, required: true },
        review: { type: Number, require: true }
    },
    { timestamps: true }
);

const Product = mongoose.models.product || mongoose.model("Product", ProductSchema);

export default Product



const data = [
    {
        title: "HAVIT HV-G92 Gamepad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "./images/product1.png",
        categories: ["computers"],
        color: "black",
        price: "$160",
        comparePrice:  "$180",
        review: 88
    },
    {
        title: "AK-900 Wired Keyboard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "./images/product2.png",
        categories: ["computers"],
        color: "black",
        price: 960,
        comparePrice: 1160,
        review: 75
    },
    {
        title: "IPS LCD Gaming Monitor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "./images/product3.png",
        categories: ["electronics"],
        color: "black",
        price: 370,
        comparePrice: 400,
        review: 99
    },
    {
        title: "S-Series Comfort Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "./images/product4.png",
        categories: ["furniture"],
        color: "black",
        price: 375,
        comparePrice: 400,
        review: 99
    },
    {
        title: "S-Series Comfort Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "./images/product4.png",
        categories: ["furniture"],
        color: "black",
        price: 375,
        comparePrice: 400,
        review: 99
    }
]