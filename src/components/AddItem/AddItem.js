import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = "https://salty-castle-19082.herokuapp.com/product";
        fetch(url, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },

            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        } )
        
    };
    return (
        <div className='addItem w-50 mx-auto'>
            <h2>Please add an Item : </h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' required placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' required placeholder="Description" {...register("description")} />
                <input className='mb-2' required placeholder="Price" type="number" {...register("price")} />
                <input className='mb-2' required placeholder="Supplier" {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' required placeholder="Quantity" type="number" {...register("quantity")} />
                <input className='mb-2' required placeholder="Photo URL" type="text" {...register("img")} />
                <input type="submit" value="Add Product"  />
            </form>
        </div>
    );
};

export default AddItem;