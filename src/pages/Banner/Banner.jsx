import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import image1 from '../../assets/banner/1.png';
import image2 from '../../assets/banner/2.png';
import image3 from '../../assets/banner/3.png';
import image4 from '../../assets/banner/4-02.png';

const Banner = () => {
  const carouselData = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  return (
    <div className="banner grid grid-cols-1 lg:grid-cols-2">
      <div className="carousel-container">
        <Carousel>
          {carouselData.map((item) => (
            <img key={item.id} src={item.image} alt={`Carousel ${item.id}`} />
          ))}
        </Carousel>
      </div>
      <div className="title-container flex flex-col justify-center items-start p-8">
        <h1 className="text-8xl font-bold text-info mb-4">Disney Dolls Store</h1>
        <h2 className="text-xl text-gray-500">Explore a magical world of Disney dolls</h2>
        <Link to="/addtoy" className="btn btn-primary mt-8">
          Add Toy
        </Link>
      </div>
    </div>
  );
};

export default Banner;
