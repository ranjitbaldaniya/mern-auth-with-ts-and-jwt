import axios from "axios";
import React, { useEffect } from "react";
import MultiStepForm from "../Register/ReactStarpForm";
import TodoApp from "../Todo/Todo";

export const Home = () => {
  // Define your product data
  const data = [
    {
      title: "HAVIT HV-G92 Gamepad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product1.png",
      categories: ["Computers"],
      color: "black",
      price: 160,
      comparePrice: 180,
      review: 4,
      reviewCount: 88,
      bestSelling: false,
    },
    {
      title: "AK-900 Wired Keyboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product2.png",
      categories: ["Computers"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 5,
      reviewCount: 75,
      bestSelling: false,
    },
    {
      title: "IPS LCD Gaming Monitor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product3.png",
      categories: ["Computers"],
      color: "black",
      price: 370,
      comparePrice: 400,
      review: 3.5,
      reviewCount: 90,
      bestSelling: false,
    },
    {
      title: "S-Series Comfort Chair",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/product4.png",
      categories: ["Furniture"],
      color: "black",
      price: 375,
      comparePrice: 400,
      review: 3,
      reviewCount: 95,
      bestSelling: false,
    },
    {
      title: "Breed Dry Dog Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dog-food.png",
      categories: ["Food"],
      color: "black",
      price: 100,
      comparePrice: 125,
      review: 5,
      reviewCount: 45,
      bestSelling: false,
    },

    {
      title: "The north coat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/jacket.png",
      categories: ["Clothes"],
      color: "black",
      price: 260,
      comparePrice: 360,
      review: 3.5,
      reviewCount: 65,
      bestSelling: true,
    },

    {
      title: "Gucci duffle bag",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/bag.png",
      categories: ["Clothes"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 4.5,
      reviewCount: 55,
      bestSelling: true,
    },
    {
      title: "RGB liquid CPU Cooler",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/music.png",
      categories: ["Furniture"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 4.5,
      reviewCount: 65,
      bestSelling: true,
    },
    {
      title: "Small BookSelf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/table.png",
      categories: ["Furniture"],
      color: "black",
      price: 360,
      comparePrice: 450,
      review: 4,
      reviewCount: 85,
      bestSelling: true,
    },
    {
      title: "Breed Dry Dog Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dog-food.png",
      categories: ["Food"],
      color: "black",
      price: 100,
      comparePrice: 120,
      review: 4.5,
      reviewCount: 115,
      bestSelling: false,
    },

    {
      title: "CANON EOS DSLR Camera",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/dslr.png",
      categories: ["Computers"],
      color: "black",
      price: 360,
      comparePrice: 400,
      review: 3.5,
      reviewCount: 95,
      bestSelling: false,
    },

    {
      title: "ASUS FHD Gaming Laptop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/laptop.png",
      categories: ["Computers"],
      color: "black",
      price: 700,
      comparePrice: 950,
      review: 3.5,
      reviewCount: 117,
      bestSelling: false,
    },
    
    {
      title: "Curology Product Set",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/cream.png",
      categories: ["Computers"],
      color: "black",
      price: 500,
      comparePrice: 550,
      review: 4.5,
      reviewCount: 145,
      bestSelling: false,
    },

    {
      title: "Kids Electric Car",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/toy-car.png",
      categories: ["Computers"],
      color: "black",
      price: 960,
      comparePrice: 1100,
      review: 4,
      reviewCount: 65,
      bestSelling: false,
    },
    {
      title: "Jr. Zoom Soccer Cleats",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/sport-shoes.png",
      categories: ["Computers"],
      color: "black",
      price: 1160,
      comparePrice: 1200,
      review: 4.5,
      reviewCount: 65,
      bestSelling: false,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/gamepad.png",
      categories: ["Computers"],
      color: "black",
      price: 660,
      comparePrice: 700,
      review: 4.5,
      reviewCount: 55,
      bestSelling: false,
    },
    {
      title: "Quilted Satin Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "./assets/products/jacket_new.png",
      categories: ["Computers"],
      color: "black",
      price: 460,
      comparePrice: 500,
      review: 4.5,
      reviewCount: 95,
      bestSelling: false,
    },

  ];

  // Define your post function
  const postProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/create-multiple", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonResponse = await response.json();
      console.log("Products created:", jsonResponse);
    } catch (error) {
      console.error("Error creating products:", error);
    }
  };

  // Call the post function

  // useEffect(() => {
  // postProducts();

  // }, [])

  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl text-sky-500 font-bold">Home Page</h1>
      <button className="border rounded-md border-black p-2" onClick={postProducts}>Click to create product</button>
    </div>
  );
};
