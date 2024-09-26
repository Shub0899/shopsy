import React from 'react';
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

function Topproducts() {
    const products = [
        {
            id: 1,
            img: Img1,
            title: "Casual Wear",
            price: 49.99,
            rating: 4.5, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            img: Img2,
            title: "Printed Shirt",
            price: 59.99,
            rating: 3.5, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            img: Img3,
            title: "Women Shirt",
            price: 39.99,
            rating: 5, 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    return (
        <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
            <div className="text-xs flex flex-col justify-center items-center gap-3 py-5">
                <div className="text-primary dark:text-secondary md:text-xl font-medium">
                    Top Rated Products for you
                </div>
                <div className="text-2xl md:text-4xl font-bold text-black dark:text-white">
                    Best Products
                </div>
                <div className="text-sm text-center px-4 text-black dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
            </div>

            {/* Product Cards */}
            <div className="card over flex flex-wrap justify-center gap-5 px-4 py-10">
    {products.map((product) => (
        <div
            key={product.id}
            data-aos="fade-up"
            data-aos-delay="200"
            className="group flex w-full max-w-[280px] sm:justify-center flex-col overflow-visible rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md mb-8 sm:mb-0
            hover:bg-gray-800 hover:border-gray-700  hover:text-white transition-colors duration-300 dark:hover:bg-gray-700" // Add hover for light mode
        >
            <a className="relative mx-3 mt-3 flex h-80 overflow-visible rounded-xl" href="#">
                <img
                    className="absolute bottom-[60px] right-0 h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={product.img}
                    alt={product.title}
                />
            </a>
            <div className="mt-4 px-5 pb-5 flex justify-center flex-col items-center">
                <h5 className="text-xl tracking-tight text-black dark:text-white group-hover:text-white">
                    {product.title}
                </h5>
                <div className="rating flex flex-row gap-3 items-center">
                    <Rating
                        initialRating={product.rating} 
                        readonly
                        emptySymbol={<FaStar className="text-gray-400 dark:text-gray-500 group-hover:text-gray-500" />} 
                        fullSymbol={<FaStar className="text-yellow-500" />} 
                    />
                    <span className="text-black dark:text-gray-300 group-hover:text-gray-300">{product.rating}</span>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-black dark:text-white group-hover:text-white">${product.price}</span>
                    </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-400 text-center">
                    {product.description}
                </p>
                <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 my-3 px-4 rounded-full flex items-center gap-3 group">
                    Buy now
                </button>
            </div>
        </div>
    ))}
</div>

        </div>
    );
}

export default Topproducts;
