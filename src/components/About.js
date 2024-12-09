"use client";

import React from "react";
import CubeSlider from "./CubeSlider";

const About = () => {
    const slideData = [
        {
            img: "/image/about.jpeg",
            title: "Himalayan View 1",
        },
        {
            img: "/image/about-1.jpeg",
            title: "Himalayan View 2",
        },
        {
            img: "/image/about-2.jpeg",
            title: "Himalayan View 3",
        },
        {
            img: "/image/about-3.jpeg",
            title: "Himalayan View 4",
        },
        {
            img: "/image/about-4.jpeg",
            title: "Himalayan View 5",
        },
    ];

    return (
        <section className="bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-4 py-12 flex flex-wrap items-center">
                <div className="w-full md:w-1/2 p-4">
                    <a className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition duration-300 transform hover:scale-105 mb-6 rounded-tl-xl rounded-br-xl">
                        About Us
                    </a>

                    <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                        <p className="text-lg text-gray-600 mb-6">
                            Prime developed plots now available! These north-facing plots,
                            offering breathtaking panoramic views of the Himalayas, are fully
                            equipped with water and electricity connections ready for immediate
                            construction. It's a rare opportunity to build your dream home in a
                            peaceful, picturesque location, surrounded by nature's beauty. Don't
                            miss your chance to own a piece of this stunning landscape. Limited
                            plots available!
                            <br />
                            <br />
                            In addition, we provide complete villa construction services to
                            bring your dream home to life. Whether you're envisioning a luxurious
                            holiday retreat or a permanent residence, our expert team will guide
                            you through every stage—from design to completion. We specialize in
                            crafting custom-built villas that reflect your unique lifestyle and
                            vision.
                            <br />
                            <br />
                            Contact us today to turn your dream into reality on your very own
                            plot!
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <CubeSlider slides={slideData} width="w-96" />
                </div>
            </div>
        </section>
    );
};

export default About;
