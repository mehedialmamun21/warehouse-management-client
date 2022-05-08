import React from 'react';
import useInventories from '../hooks/useInventories';
import './MyItems.css';

const MyItems = () => {

    const [products,setProducts] = useInventories();

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