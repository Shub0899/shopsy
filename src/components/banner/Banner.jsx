import React from 'react';
import women1 from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import aos from "aos";

function Banner() {
    return (
        <div className="max-w-full mx-auto flex flex-col sm:flex-row lg:flex-row dark:bg-gray-900 py-20 overflow-hidden">
            <div className="flex justify-center items-center md:gap-10 gap-2 flex-col sm:flex-row">
                <div className="px-2 sm:px-3" data-aos="fade-right">
                    <img
                        className="w-full h-auto max-h-[400px] object-cover shadow-[0_3px_10px_rgb(0,0,0,1)]"
                        src={women1}
                        alt="Image"
                    />
                </div>
                <div className="text-left md:w-1/2 sm:text-left px-4 sm:px-14">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-2 md:my-4 text-black dark:text-white">
                        Winter Sale up to 50% Off
                    </h1>
                    <p className="text-sm sm:text-base text-black dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        reiciendis inventore iste ratione ex alias quis magni at optio
                    </p>
                    <div className="flex flex-col mt-6">
                        {/* Quality Product */}
                        <div className="flex flex-row gap-3 py-4 items-center">
                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 bg-blue-200 dark:bg-blue-600 text-black dark:text-white rounded-full"
                            >
                                <GrSecure />
                            </a>
                            <div className="font-bold text-sm text-black dark:text-white">Quality Product</div>
                        </div>
                        {/* Fast Delivery */}
                        <div className="flex flex-row gap-3 py-4 items-center">
                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 bg-green-200 dark:bg-green-600 text-black dark:text-white rounded-full"
                            >
                                <IoFastFood />
                            </a>
                            <div className="font-bold text-sm text-black dark:text-white">Fast Delivery</div>
                        </div>
                        {/* Easy Payment Method */}
                        <div className="flex flex-row gap-3 py-4 items-center">
                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 bg-yellow-200 dark:bg-yellow-600 text-black dark:text-white rounded-full"
                            >
                                <GiFoodTruck />
                            </a>
                            <div className="font-bold text-sm text-black dark:text-white">Easy Payment Method</div>
                        </div>
                        {/* Get Offers */}
                        <div className="flex flex-row gap-3 py-4 items-center">
                            <a
                                href="#"
                                className="flex items-center justify-center w-8 h-8 bg-purple-200 dark:bg-purple-600 text-black dark:text-white rounded-full"
                            >
                                <GiFoodTruck />
                            </a>
                            <div className="font-bold text-sm text-black dark:text-white">Get Offers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
