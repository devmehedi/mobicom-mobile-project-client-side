import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const AllUsers = () => {
  const [orders, setOrders] = useState([]);

  //   This is For Delete

  const handleDeelete = (id) => {
    if (window.confirm("Are you sure you want To delete")) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("delete Succeflly");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);
  return (
    <div className=" my-5">
      <h2 className="text-center pb-3">
        Here is Website All Users :{orders.length}
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Display Name</th>
            <th>Email</th>
            <th>role</th>
            <th>Delete</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order._id}</td>
              <td>{order.displayName}</td>
              <td>{order.email}</td>
              <td>{order.role}</td>

              <td>
                <div className="btn-all-table">
                  <button onClick={() => handleDeelete(order._id)}>X</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllUsers;
