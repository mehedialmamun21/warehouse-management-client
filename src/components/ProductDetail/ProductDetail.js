import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        const url = `https://salty-castle-19082.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);



    const handleRestockQuantity = event => {

        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updatedQuantity = {quantity};

        const url = `https://salty-castle-19082.herokuapp.com/product/${productId}`;
        console.log(url);
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data => {
            // console.log('successfully updated',data);
            alert('Quantity updated successfully');
            event.target.reset();
        })
    }



    return (
        <div id='pro-det'>
            <div className='product-details mx-auto'>
                <img className='w-100 mx-auto' src={product.img} alt="" />
                <h5 className='w-25 ms-3 mt-2 bg-warning'>Detail :</h5>
                <p>Name : {product.name}</p>
                <p>Id : {product._id}</p>
                <p>Price :{product.price}</p>
                <p>Description : {product.description}</p>
                <p>Supplier : {product.supplier}</p>
                <p>Quantity : {product.quantity}</p>
            </div>



            <div className='w-25 mx-auto mt-5'>
                <h4>Restock the Items :</h4>
                <form onSubmit={handleRestockQuantity}>
                    <input type="number" placeholder="Add Quantity" name="quantity" id="" />
                    <br /><br />
                    <input className='btn btn-success' type="submit" value="Restock"  />
                    <br /> <br />
                    <small className='mess'>please reload the page to see the updated quantity</small>
                </form>
            </div>



        </div>
    );
};

export default ProductDetail;