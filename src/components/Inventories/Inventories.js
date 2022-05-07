import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';
import './Inventories.css';
const Inventories = () => {

    const navigate = useNavigate();
    const navigateToAddItem = () =>{
        navigate(`/add_item`);
    }

    return (
        <div className='inventory'>

            <button onClick={navigateToAddItem} className='btn btn-success ms-5 mt-5'>Add New Item</button>

            <Products></Products>

        </div>
    );
};

export default Inventories;