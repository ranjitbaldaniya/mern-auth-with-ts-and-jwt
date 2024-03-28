import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  // console.log("isAuthenticated", isAuthenticated);
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Your App Name
        </Link>

        <div className="flex space-x-4 text-black">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/Todo" className="hover:text-gray-300">
                Todo
              </Link>
              <Link to="/Contactus" className="hover:text-gray-300">
                Contact
              </Link>

              <Link to="/userlisting" className="hover:text-gray-300">
                All User
              </Link>
              <button
                onClick={logout}
                className="hover:text-gray-300 text-blue-300 border px-3 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300 ">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
