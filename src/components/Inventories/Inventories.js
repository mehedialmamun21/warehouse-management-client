import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import './Inventories.css';


const Inventories = () => {

    const [products] = useInventories();

    const navigate = useNavigate();
    
    const navigateToAddItem = () =>{
        navigate(`/add_item`);
    }

    return (
        
        <div>

            <button onClick={navigateToAddItem} className='btn btn-success ms-5 mt-5'>Add New Item</button>

            <div className='pro-contain'>

                {
                    products.map(product => <div key={product._id}>
                            <div className="pro-all">
                                <img src={product.img} alt="" />
                                <h4>Name : {product.name}</h4>
                                <p>Price : {product.price}</p>
                                <p><small>{product.description}</small></p>
                                <button className='btn btn-danger' >Delete</button>
                            </div>
                        </div> )
                }

            </div>

        </div>


    );
};

export default Inventories;