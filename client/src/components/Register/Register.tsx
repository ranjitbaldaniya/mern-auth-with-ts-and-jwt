import React, { FormEvent, useState } from "react";
import FormOne from "./FormOne";
import { useMultiStepForm } from "./useMultiStepForm";
import { FromTwo } from "./FromTwo";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import FormThree from "./FormThree";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  gender: string;
  mobileNo: string;
  address1: string;
  address2: string;
  state: string;
  country: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstname: "",
  lastname: "",
  dateOfBirth: "",
  gender: "",
  mobileNo: "",
  address1: "",
  address2: "",
  state: "",
  country: "",
  email: "",
  password: "",
};

const Register = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const [userAlreadyExist, setUserAlreayExist] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <FormOne {...data} updateFields={updateFields} />,
      <FromTwo {...data} updateFields={updateFields} />,
      <FormThree {...data} updateFields={updateFields} />,
    ]);

  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      if (!isLastStep) return next();

      console.log("data", data);

      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const res = await response.json();
      console.log("res", res);

      if (res.error === "User already exists with same email") {
        setUserAlreayExist(true);
        return;
      } else {
        navigate("/login");
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
                  <form onSubmit={handleSubmit}>
                    <div className="w-80 mx-auto text-right">
                      {currentStepIndex + 1} / {steps.length}
                    </div>

                    {step}
                    <div
                      className={`w-80 mx-auto flex mt-3 ${
                        isFirstStep ? "justify-end" : "justify-between"
                      }`}
                    >
                      {!isFirstStep && (
                        <button
                          type="button"
                          className="border border-black rounded px-3 py-1"
                          onClick={back}
                        >
                          Back
                        </button>
                      )}

                      {userAlreadyExist && (
                        <p className="text-red-600">
                          User already exists with same email!
                        </p>
                      )}

                      <button
                        type="submit"
                        className="border border-black rounded px-3 py-1"
                      >
                        {isLastStep ? "Submit" : "Next"}
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* <div
        style={{
          position: "relative",
          maxWidth: "max-content",
          margin: "0 auto",
        }}
      >
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse ">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2.5 rtl:space-x-reverse ${
                index === currentStepIndex
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
                  index === currentStepIndex
                    ? "border-blue-600 dark:border-blue-500"
                    : "border-gray-500 dark:border-gray-400"
                }`}
              >
                {index + 1}
              </span>
              <span>
                <h3 className="font-medium leading-tight">
                  {index === 0
                    ? "User Info"
                    : index === 1
                    ? "Address Info"
                    : "Personal Info"}
                </h3>
                <p className="text-sm">Fill all details</p>
              </span>
            </li>
          ))}
        </ol>
      </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
