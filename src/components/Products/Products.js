import React, {useEffect, useState} from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <h2 className="services-title mt-5 mb-5">Inventories :</h2>

      <div className="products-container">
        {
            products.map( product => <Product key={product._id} product={product}></Product> )
        } 
    </div>

    </div>
  );
};

export default Products;