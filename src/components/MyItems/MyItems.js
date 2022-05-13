import React from "react";
import { Table } from "react-bootstrap";
import useInventories from "../hooks/useInventories";
import "./MyItems.css";

const MyItems = () => {
  const [products, setProducts] = useInventories();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `https://salty-castle-19082.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="mx-5 my-5">

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <small>{product.description}</small>
              </td>
              <td>{product.supplier}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
};

export default MyItems;
