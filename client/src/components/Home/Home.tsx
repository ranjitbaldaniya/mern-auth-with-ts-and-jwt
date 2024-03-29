import axios from "axios";
import React, { useEffect } from "react";
import MultiStepForm from "../Register/ReactStarpForm";
import TodoApp from "../Todo/Todo";

export const Home = () => {

  // Define your product data
const data = [
  {
      title: "HAVIT HV-G92 Gamepad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "./assets/product1.png",
      categories: ["computers"],
      color: "black",
      price: 160,
      comparePrice: 180,
      review: 4
  },
  {
      title: "AK-900 Wired Keyboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "./assets/product2.png",
      categories: ["computers"],
      color: "black",
      price: 960,
      comparePrice: 1160,
      review: 5
  },
  {
      title: "IPS LCD Gaming Monitor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "./assets/product3.png",
      categories: ["electronics"],
      color: "black",
      price: 370,
      comparePrice: 400,
      review: 3.5
  },
  {
      title: "S-Series Comfort Chair",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "./assets/product4.png",
      categories: ["furniture"],
      color: "black",
      price: 375,
      comparePrice: 400,
      review: 3
  },
  {
      title: "S-Series Comfort Chair",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "./assets/product4.png",
      categories: ["furniture"],
      color: "black",
      price: 375,
      comparePrice: 400,
      review: 4.5
  }
];

// Define your post function
const postProducts = async () => {
  try {
      const response = await fetch('http://localhost:3001/create-multiple', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const jsonResponse = await response.json();
      console.log('Products created:', jsonResponse);
  } catch (error) {
      console.error('Error creating products:', error);
  }
};

// Call the post function


// useEffect(() => {
// postProducts();

// }, [])



  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl text-sky-500 font-bold">Home Page</h1>
    </div>
  );
};
