import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css';

const Product = ({product}) => {
  const {_id,name,img,description,price} = product;
  const navigate = useNavigate();

  const navigateToProductDetail = id => {
    navigate(`/product/${id}`);
  }
  return (
    <div className="product-detail">
      <img src={img} alt="" />
      <h4>Name : {name}</h4>
      <p>Price : {price}</p>
      <p><small>{description}</small></p>
      <button className='btn btn-success' onClick={()=>navigateToProductDetail(_id)}>Update</button>
    </div>
  );
};

export default Product;