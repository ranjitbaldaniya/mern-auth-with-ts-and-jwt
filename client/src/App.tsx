// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Register from "./components/Register/Register";
import FormRegistration from "./components/Register/FormRegi";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/Contact/ContactUs";
import Login from "./components/Login/Login";
import { useAuth } from "./utils/AuthProvider";
import PrivateRoute from "./utils/PrivetRoute";
import AdminLayout from "./layout/AdminLayout";
import NewNavBar from "./components/Navbar/NewNavBar";
import TodoApp from "./components/Todo/Todo";
import UserListing from "./components/UserListing/UserListing";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Todo" element={<TodoApp />} />
            <Route path="/UserListing" element={<UserListing />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
