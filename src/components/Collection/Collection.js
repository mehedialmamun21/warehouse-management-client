import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collection.css';

const Collection = ({collection}) => {
    const {_id,name,img,description,price} = collection;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
    navigate(`/product/${id}`);
  }

    return (
        <div className="product-det">
        <img src={img} alt="" />
        <h4>Name : {name}</h4>
        <p>Price : {price}</p>
        <p><small>{description}</small></p>
        <button className='btn btn-success' onClick={()=>navigateToProductDetail(_id)}>Update</button>
        </div>
    );
};

export default Collection;