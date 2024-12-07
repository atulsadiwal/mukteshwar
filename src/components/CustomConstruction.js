"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomConstruction = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            {/* <section className="relative bg-cover bg-center py-20 bg-BG6">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-center mb-12 drop-shadow-xl">
                        Custom Construction Services
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div
                            className="text-white space-y-6 flex flex-col justify-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-3xl font-semibold">
                                Option for construction based on your specific requirements
                            </h3>
                            <p className="text-lg">
                                Build your dream home with a view that inspires. Whether you need
                                a traditional style or a modern masterpiece, our expert team can
                                help bring your vision to life with high-quality craftsmanship.
                            </p>

                            <div className="space-x-4 max-sm:space-x-0 max-sm:space-y-2">
                                <button
                                    className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold transform hover:scale-105 transition-all"
                                >
                                    Get Started
                                </button>
                                <button
                                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold transform hover:scale-105 transition-all"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="image/coustom-construction.jpeg"
                                alt="Custom Construction"
                                className="object-cover w-full h-full transition-all transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 bg-BG6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-center mb-8 sm:mb-12 drop-shadow-xl">
                        Custom Construction Services
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div
                            className="text-white space-y-4 sm:space-y-6 flex flex-col justify-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-2xl sm:text-3xl font-semibold">
                                Option for construction based on your specific requirements
                            </h3>
                            <p className="text-base sm:text-lg">
                                Build your dream home with a view that inspires. Whether you need
                                a traditional style or a modern masterpiece, our expert team can
                                help bring your vision to life with high-quality craftsmanship.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <button
                                    className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 rounded-full font-semibold transform hover:scale-105 transition-all text-sm sm:text-base"
                                >
                                    Get Started
                                </button>
                                <button
                                    className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold transform hover:scale-105 transition-all text-sm sm:text-base"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9 lg:aspect-h-10"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="/image/coustom-construction.jpeg"
                                alt="Custom Construction"
                                className="transition-all transform hover:scale-110 object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CustomConstruction;
