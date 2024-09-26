import React, { useState, useEffect } from "react";
import sale from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import women from "../../assets/hero/women.png";
import Aos from "aos";


function Hero() {
    const slides = [
        {
            id: 1,
            heading: "Upto 50% off on all Men's Wear",
            subheading: "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            button: "Order now",
            img: sale

        },
        {
            id: 1,
            heading: "30% off on all Women's Wea",
            subheading: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            button: "Order now",
            img: shopping

        },
        {
            id: 1,
            heading: "70% off on all Products Sale",
            subheading: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            button: "Order now",
            img: women

        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <div className="flex justify-center items-center relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-950 dark:text-white duration-200" data-aos="fade-up">
            <div className="h-[700px] w-[700px] flex justify-center items-center bg-primary/40 rounded-lg transform rotate-45 absolute top-[-300px] z-0"></div>

            <div className="container z-10">
                <div className="relative w-full h-full flex justify-center items-center">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute flex flex-col md:flex-row justify-between items-center w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {/* Text Section */}
                            <div className={`flex flex-col sm:items-start ${index === currentIndex ? "order-2 md:order-1" : ""} items-center `}>
                                <h1 className="text-2xl md:text-4xl font-bold text-center my-2 md:my-4"> {/* Reduced margin */}
                                    {slide.heading}
                                </h1>
                                <div className="py-2 max-w-[500px] w-full mx-auto it"> {/* Reduced padding */}

                                    <h2 className="text-base md:text-xl font-medium text-gray-700 leading-relaxed break-words dark:text-white text-center sm:text-left">
                                        {slide.subheading}
                                    </h2>
                                </div>
                                <div className="py-2 text-center"> {/* Reduced padding */}
                                    <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                                        {slide.button}
                                    </button>
                                </div>
                            </div>

                            {/* Image Section */}
                            <img
                                src={slide.img}
                                alt={`slide-${slide.id}`}
                                className="max-w-[300px] md:max-w-[500px] w-auto h-auto order-1 md:order-2"
                            />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Hero;
