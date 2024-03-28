import React, { FormEvent, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

type FormData = {
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const { login } = useAuth();

  const [userNotExist, setUserNotExist] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();

      console.log("data", data);

      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const res = await response.json();
      console.log("res", res);

      if (res.error === "User does not exist") {
        console.log("error==>", res.error);
        setUserNotExist(true);
        return;
      } else if (res.error === "Incorrect password") {
        console.log("error==>", res.error);
        setIsPasswordValid(true);
        return;
      } else {
        login()
        localStorage.clear();
        localStorage.setItem("user-token", res.token);
        navigate("/contactus");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6" >
            <div className="mt-20">
              <Card>
                <CardBody>
                  <h2 className="text-center font-bold text-sky-500">Login</h2>
                  <form onSubmit={handleLogin}>
                    <div className="flex flex-col flex-wrap justify-center w-80  m-auto">
                      <div className="w-full mb-3">
                        <label
                          className="block mb-2 w-full"
                          htmlFor="firstName"
                        >
                          Email
                        </label>
                        <input
                          className="w-full border p-2 rounded"
                          autoFocus
                          required
                          type="email"
                          value={data.email}
                          onChange={(e) =>
                            updateFields({ email: e.target.value })
                          }
                        />
                      </div>

                      <div className="w-full mb-3">
                        <label
                          className="block mb-2 w-full"
                          htmlFor="firstName"
                        >
                          Password
                        </label>
                        <input
                          className="w-full border p-2 rounded"
                          autoFocus
                          required
                          type="password"
                          value={data.password}
                          onChange={(e) =>
                            updateFields({ password: e.target.value })
                          }
                        />
                      </div>

                      <div className="text-center mb-3">
                        {userNotExist && (
                          <p className="text-red-600">Email does not exist!</p>
                        )}

                        {isPasswordValid && (
                          <p className="text-red-600">Incorrect password!</p>
                        )}

                        <button className="border py-2 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-950">
                          Login
                        </button>

                        <div className="text-center mt-2">
                          <Link
                            className="text-light"
                            to="/register"
                            // onClick={(e) => e.preventDefault()}
                          >
                            <small className="text-gray-700">
                              Don't have accout? Click here for{" "}
                              <span className="text-sky-500">
                                New account
                              </span>
                            </small>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
