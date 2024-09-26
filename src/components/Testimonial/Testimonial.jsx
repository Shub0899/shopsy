import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Autoplay } from 'swiper/modules';

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 5,
        name: "Elon Musk",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/105/105",
    },
    {
        id: 6,
        name: "Jeff Bezos",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/106/106",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 dark:bg-gray-900 text-black dark:text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className="mb-16">
                    <span className="text-sm font-medium text-center block mb-2 text-gray-400">TESTIMONIAL</span>
                    <h2 className="text-4xl text-center font-bold">What our happy users say!</h2>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1} // Default to 1 slide per view for smaller screens
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3, // 3 slides per view on screens >= 1024px
                            spaceBetween: 30, // Adjust space between slides
                        },
                    }}
                >
                    {TestimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center cursor-pointer">
                                <div
                                    className="p-6 cursor-pointer transition-all duration-500 relative w-full sm:max-w-md"
                                    style={{
                                        transform: 'scale(1)',
                                        opacity: 1,
                                        transition: 'all 0.5s ease',
                                    }}
                                >
                                    <div className="bg-gray-800 rounded-md dark:bg-gray-800 p-4">
                                        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                            <div className="max-w-md mx-auto relative">
                                                <img
                                                    className="w-16 h-16 rounded-full mx-auto mb-4 sm:w-24 sm:h-24"
                                                    src={testimonial.img}
                                                    alt="profile picture"
                                                />
                                                <p className="text-lg sm:text-2xl font-medium text-gray-100 mb-4">"{testimonial.text}"</p>
                                                <div className="font-medium text-gray-100 text-sm sm:text-base">{testimonial.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
