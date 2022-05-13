import React, { useEffect, useState } from "react";
import { Accordion, Carousel, Placeholder } from "react-bootstrap";
import "./Home.css";

import imge from "../../images/home_section_img.jpg";

import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img7 from "../../images/img7.jpg";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://salty-castle-19082.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setCollections(data.splice(0, 6)));
  }, []);

  return (
    <div className="home">
      <h2 className="home-title mx-auto">Smartphone Management Warehouse</h2>

      <div className="carousel mx-auto mb-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption>
              <h5>Best Quality Smartphone</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img7} alt="Second slide" />

            <Carousel.Caption>
              <h5>Consistent Performance for a long time </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />

            <Carousel.Caption>
              <h5>Well known products facility</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Goal and objective</Accordion.Header>
            <Accordion.Body>
              One of the main inventory management goals and objectives is to
              save you large sums of money for business activities.The
              fundamental premise of inventory management is holding cost. If
              you suddenly need to order more materials, you have to pay more
              for delivery expenses, which is disadvantageous for your business.
              Additionally, you have to charge huge money for storing when you
              have too much inventory because of hiring stocks. That is why you
              need effective warehouse management to help you control the cost.
              This is the main moto and objects.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Products Management</Accordion.Header>
            <Accordion.Body>
              Once dominated by RF scanners, the diverse area of inventory
              management is seeing the use of smartphones and tablets increase.
              And it's all down to their ability to more effectively carry out
              barcode scanning, order picking and replenishment.From the
              warehouse to the shopfloor, mobile inventory management systems
              utilize smart devices for accurate asset management and rapid
              ROI.The shift also ties in with the announcement that any legacy
              warehouse devices running Windows Mobile will need to be replaced
              due the software being discontinued in 2019.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <h2 className="invent mx-auto">Inventory Items Section : </h2>

      <div className="products-cont">
        {collections.map((collection) => (
          <Collection key={collection._id} collection={collection}></Collection>
        ))}
      </div>

      <div className="container w-25 mx-auto my-5">
        <Link to="/inventories">
          <button className="btn btn-primary mt-5 ms-5 mb-5" type="button">
            Manage Inventories
          </button>
        </Link>
      </div>

      <div className="container d-flex">
        <img src={imge} alt="" />
        <div className="mt-5 ms-5">
          <h4>Why you need an Android warehouse management system?</h4>
          <p>
            Googles Android boasts 90% of smartphone users, but their operating
            systems reach further, exchanging phones for rugged devices in the
            hands of warehouse teams across the United States.
            <br />
            Microsoft's future of supporting Windows devices in the warehouse is
            slowly being phased out - meaning current users will become legacy
            users and will eventually lack access to tech support and necessary
            updatess.
          </p>
          <br />
          <h4>Order picking with an Android warehouse management system?</h4>
          <p>
            The days of manual misguided literally order picking are now a thing
            of the past. With the introduction of an Android warehouse
            management system and Android OS rugged devices barcode scanners
            into the warehouse, order picking is easier than ever before.
            <br />
            When it is time for a warehouse employee to pick orders, the first
            step is picking up the device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
