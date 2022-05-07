import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div id='pro-det'>
            <div className='product-details mx-auto'>
                <h5 className='w-25 mx-auto bg-warning'>Detail :</h5>
                <p>Product-Name : {product.name}</p>
                <p>Product-Id : {product._id}</p>
                <p>Product-Price :{product.price}</p>
                <p>Product-Description : {product.description}</p>
                <p>Supplier : SK traders</p>
                <p>Status : Sold</p>
                <img className='w-100 mx-auto' src={product.img} alt="" />
            </div>
        </div>
    );
};

export default ProductDetail;