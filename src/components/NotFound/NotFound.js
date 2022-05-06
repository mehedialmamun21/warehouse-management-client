import React from 'react';
import './NotFound.css';

import notFound from '../../images/404-img.jpg'; 

const NotFound = () => {
    return (
        <div className='error'>
            <h2>404 ! Not Found.. </h2>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;