import React from 'react';
import logo from "../../assets/logo (2).png";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between gap-10 mx-10 my-10">
                    <div className="mb-6 md:mb-0 flex-1 min-w-[250px] flex  flex-col">
                        <a href="#" className="flex">
                            <img src={logo} className="h-8 me-3" alt="Shopsy Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopsy</span>
                        </a>
                        <p className='max-w-[300px] text-left text-black dark:text-gray-300 py-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                            beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 w-full">
                        <div className='mb-6'>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">Important Links</h2>
                            <ul className="text-gray-900 dark:text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Home</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="#" className="hover:underline">Contact us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-6'>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">About Us</h2>
                            <ul className="text-gray-900 dark:text-gray-300 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Our Story</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Support</a>
                                </li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase">Social Links</h2>
                            <div className='flex gap-5 text-gray-900 dark:text-gray-300'>
                                <a href="#" className="hover:text-blue-500">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className='py-4'>
                                <div className='flex items-center gap-3 py-4 text-gray-900 dark:text-gray-300'>
                                    <FaLocationArrow /><p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className='flex items-center gap-3 text-gray-900 dark:text-gray-300'>
                                    <FaPhoneAlt /><p>+91 - 6306597847</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
