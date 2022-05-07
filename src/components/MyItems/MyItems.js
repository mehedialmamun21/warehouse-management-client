import React from 'react';
import useInventories from '../hooks/useInventories';
import './MyItems.css';

const MyItems = () => {

    const [products] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure ?');
        if(proceed){

        }
    }

    return (
        <div className='pro-container'>

            {
                products.map(product => <div key={product._id}>
                        <div className="product-all">
                            <img src={product.img} alt="" />
                            <h4>Name : {product.name}</h4>
                            <p>Price : {product.price}</p>
                            <p><small>{product.description}</small></p>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger' >Delete</button>
                        </div>
                    </div> )
            }

        </div>
    );
};

export default MyItems;