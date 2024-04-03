import axios from "axios";
import React, { useEffect } from "react";
import MultiStepForm from "../Register/ReactStarpForm";
import TodoApp from "../Todo/Todo";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../redux/slice/productSlice";
import { fetchCartData } from "../../redux/slice/cartSlice";

export const Home = () => {
  // const getProductData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/getall");
  //     // const data = await response.json();
  //     console.log("response", response.data);
  //     return response.data; // Return the fetched data
  //   } catch (error) {
  //     console.log("error", error);
  //     throw error; // Rethrow the error so React Query can catch it
  //   }
  // };

  // // Call the post function

  // useEffect(() => {
  //   getProductData();
  // }, []);

  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );
  console.log("products ==>", products);

  useEffect( () => {
     fetchCartData;
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl text-sky-500 font-bold">Home Page</h1>
      <button
        className="border rounded-md border-black p-2"
        // onClick={postProducts}
      >
        Click to create product
      </button>
    </div>
  );
};
