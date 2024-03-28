import React, { useState } from "react";
import {
  Form,
  Button,
  ProgressBar,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
} from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Container>
      <Row>
        <Col md={6} lg={6} className="m-auto">
          <Card>
            <CardBody className="p-5">
              <h2 className="mb-5 text-center">Registeration form</h2>
              <Form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Form.Group controlId="formStep1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                )}
                {step === 2 && (
                  <Form.Group controlId="formStep2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                )}
                {step === 3 && (
                  <Form.Group controlId="formStep3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                )}
                <div className="d-flex justify-content-between mt-5">
                  {step > 1 && (
                    <Button variant="secondary" onClick={handlePrevious}>
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button variant="primary" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  )}
                </div>
              </Form>
            </CardBody>
            <CardFooter>
              <ProgressBar now={(step / 3) * 100} />
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiStepForm;
