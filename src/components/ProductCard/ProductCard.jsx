import React, { useEffect } from 'react';
import Img1 from "../../assets/women/women (1).png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function ProductCard() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); // Empty dependency array ensures this runs only on mount

  const products = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      price: 49.99,
      aosDelay: "0",
      rating: "4.5"
    },
    {
      id: 2,
      img: Img2,
      title: "Women Western",
      price: 59.99,
      aosDelay: "200",
      rating: "3.5"
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      price: 29.99,
      aosDelay: "400",
      rating: "4.5"
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      price: 19.99,
      aosDelay: "600",
      rating: "5"
    },
  ];

  return (
    <div className='bg-white dark:bg-gray-900 text-white'>
      <div className="text div text-xs flex flex-col justify-center items-center gap-3 py-5">
        <div className="text-primary md:text-xl font-medium">
          Top Selling Products for you
        </div>
        <div className="text-2xl md:text-4xl font-bold text-black dark:text-white">Products</div>
        <div className="text-sm text-center px-4 text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores
          modi Sit asperiores modi
        </div>
      </div>

      {/* Using flex instead of grid */}
      <div className="card flex flex-wrap justify-center gap-5 px-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group my-10 flex w-full max-w-[280px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-gray-700 dark:border-gray-600"
            data-aos="fade-up"
            data-aos-delay={p.aosDelay} // AOS animation with delay
          >
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="absolute top-0 right-0 h-full w-full object-cover"
                src={p.img}
                alt={p.title}
              />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-black dark:text-white">{p.title}</h5>
              </a>
              <div className='rating flex flex-row gap-3 items-center text-black dark:text-white'>
                {<FaStar className='text-primary'/>}
                {p.rating}
              </div>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-black dark:text-white">${p.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
