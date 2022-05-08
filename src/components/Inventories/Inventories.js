import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import './Inventories.css';


const Inventories = () => {

    const [products,setProducts] = useInventories();

    const navigate = useNavigate();

    const navigateToAddItem = () =>{
        navigate(`/add_item`);
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure ?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
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
                                <button onClick={() => handleDelete(product._id)} className='btn btn-danger' >Delete</button>
                            </div>
                        </div> )
                }

            </div>

        </div>


    );
};

export default Inventories;