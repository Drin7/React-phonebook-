import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import contacts from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import N from "./Navbar";

function Add() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = lastName,
      c = address,
      d = city,
      z = country,
      f = email,
      g = number;

    contacts.push({
      id: uniqueId,
      Name: a,
      LastName: b,
      Address: c,
      City: d,
      Country: z,
      Email: f,
      Number: g,
    });

    history("/");
    console.log("clicked");
  };

  return (
    <div>
      <h3 style={{ margin: "2rem" }}>Add a new contact</h3>
      <Form className="d-grip gap-0" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <label htmlFor="Name">Name</label> <br />
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <label htmlFor="Last Name">Last Name</label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <label htmlFor="Address">Address:</label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <label htmlFor="City">City:</label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCountry">
          <label htmlFor="Country">Country:</label>
          <Form.Control
            type="text"
            placeholder="Enter Country"
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <label htmlFor="Email">Email:</label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNumber">
          <label htmlFor="Number">Number</label>
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Enter Number"
            required
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Add;
