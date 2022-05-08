import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img7 from '../../images/img7.jpg'
import { Link } from 'react-router-dom';
import Collection from '../Collection/Collection';

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };


    const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setCollections(data.splice(0, 6)));
  }, []);


    return (
        <div className='home'>

            <h2 className='home-title mx-auto'>Smartphone Management Warehouse</h2>


            <div className='carousel mx-auto'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Best Quality Smartphone</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img7}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h5>Consistent Performance for a long time </h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h5>Well known products facility</h5>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>

            <h3 className='invent mx-auto'>Inventory Items Section : </h3>


            <div className="products-cont">
                {
                    collections.map(collection => <Collection 
                        key={collection._id} 
                        collection={collection}
                    ></Collection> )
                }
            </div>

            



            <Link to="/inventories">
                <button className='btn btn-primary mt-5 ms-5 mb-5' type="button"> 
                    Manage Inventories 
                </button>         
            </Link>


        </div>
    );
};

export default Home;