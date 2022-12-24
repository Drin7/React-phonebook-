import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import contacts from "./index";
import { Link, useNavigate } from "react-router-dom";
import N from "./Navbar";

function Home() {
  let history = useNavigate();

  const handleEdit = (
    id,
    name,
    lastName,
    address,
    city,
    country,
    email,
    number
  ) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("Address", address);
    localStorage.setItem("City", city);
    localStorage.setItem("Country", country);
    localStorage.setItem("Email", email);
    localStorage.setItem("Number", number);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = contacts
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    contacts.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <Link className="d-grid gap-2" to={"/create"}>
        <Button size="sm" style={{ width: "150px", margin: "2rem" }}>
          Add Contact
        </Button>
      </Link>
      <div style={{ margin: "10rem" }} className="table-responsive">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.LastName} </td>
                  <td>{item.Address} </td>
                  <td>{item.City} </td>
                  <td>{item.Country} </td>
                  <td>{item.Email} </td>
                  <td>{item.Number} </td>

                  <td>
                    <Link to={"/edit"}>
                      <Button
                        onClick={() =>
                          handleEdit(
                            item.id,
                            item.Name,
                            item.LastName,
                            item.Address,
                            item.City,
                            item.Country,
                            item.Email,
                            item.Number
                          )
                        }
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
      </div>
    </Fragment>
  );
}

export default Home;
