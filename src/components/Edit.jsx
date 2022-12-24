import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import contacts from "./index";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import N from "./Navbar";

function Edit() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = contacts
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = contacts[index];
    a.Name = name;
    a.LastName = lastName;
    a.Address = address;
    a.City = city;
    a.Country = country;
    a.Email = email;
    a.Number = number;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setLastName(localStorage.getItem("LastName"));
    setAddress(localStorage.getItem("Address"));
    setCity(localStorage.getItem("City"));
    setCountry(localStorage.getItem("Country"));
    setEmail(localStorage.getItem("Email"));
    setNumber(localStorage.getItem("Number"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <h2>Edit current Contact</h2>

      <Form className="d-grip gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Number"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
