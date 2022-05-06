import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img7 from '../../images/img7.jpg'

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <div className='home'>

            <h2 className='mx-auto'>Smartphone Management Warehouse</h2>


            <div className='carousel mx-auto'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best Quality Smartphone</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img7}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Consistent Performance for a long time </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Well known and guaranted services</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>





        </div>
    );
};

export default Home;