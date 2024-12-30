import React from 'react';

const Footer = () => {
    return (
        <>
            <section className='w-full bg-gray-800 h-[20vh] flex justify-center items-center'>
                <div className='text-center'>
                    <h3 className='text-lg text-white flex items-center'>Hill Station
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copyright ml-2"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
                        <span className="ml-2">2024 created by BrandShow</span>
                    </h3>
                </div>
            </section>
        </>
    );
}

export default Footer;
