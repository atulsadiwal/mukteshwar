"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { X } from 'lucide-react';

const CustomConstruction = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <section className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 bg-BG6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-5xl font-extrabold text-transparent uppercase bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-center mb-8 sm:mb-12 drop-shadow-xl  max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                        Custom Construction Services
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div
                            className="relative text-white space-y-4 sm:space-y-6 flex flex-col justify-center max-sm:text-gray-600"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-3xl font-semibold max-md:text-2xl max-sm:text-xl">
                                Option for construction based on your specific requirements
                            </h3>
                            <p className="text-lg max-md:text-base max-sm:text-sm">
                                Build your dream home with a view that inspires. Whether you need
                                a traditional style or a modern masterpiece, our expert team can
                                help bring your vision to life with high-quality craftsmanship.
                            </p>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9 lg:aspect-h-10"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            onClick={openModal}
                        >
                            <img
                                src="/image/coustom-construction.webp"
                                alt="Custom Construction"
                                className="transition-all transform hover:scale-110 object-cover h-96 w-full"
                            />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                        </div>

                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src="/image/coustom-construction.jpg"
                            alt="Custom Construction"
                            className="max-w-full max-h-full object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CustomConstruction;
