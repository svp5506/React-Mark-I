import React, { Component } from "react";
import { Col, Row, Form, Button, Media } from "react-bootstrap";
import "./content1.css";

export default class contactform extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Media id="stats">
            <img
              width={64}
              height={64}
              className="align-self-center mr-3"
              src="https://img.icons8.com/color/48/000000/calculator.png"
              alt="Calculator"
            />
            <Media.Body className="align-self-center mr-3">
              <h2>Annual Savings of over 30% on your Electricity Bill</h2>
            </Media.Body>
          </Media>
          <Media id="stats">
            <img
              width={64}
              height={64}
              className="align-self-center mr-3"
              src="https://img.icons8.com/color/48/000000/real-estate.png"
              alt="Homes"
            />
            <Media.Body className="align-self-center mr-3">
              <h2>Over 175,000 Customers Nationwide</h2>
            </Media.Body>
          </Media>
        </Col>
        <Col>
          <h3 align="left" id="contacttitle">
            Contact Us{" "}
          </h3>
          <Form id="contactform">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
